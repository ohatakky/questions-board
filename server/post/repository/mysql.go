package repository

import (
	"database/sql"
	"fmt"
	"log"
	"questions-board/server/models"
	"questions-board/server/post"
)

type mysqlPostRepository struct {
	Conn *sql.DB
}

func NewMysqlPostRepository(Conn *sql.DB) post.Repository {
	return &mysqlPostRepository{Conn}
}

func (m *mysqlPostRepository) Get(b *models.Board) ([]*models.Post, error) {
	query := fmt.Sprintf("SELECT content FROM post WHERE board_id = %d", b.Id)
	rows, err := m.Conn.Query(query)
	if err != nil {
		log.Fatal(err.Error())
	}
	defer rows.Close()

	res := make([]*models.Post, 0)
	for rows.Next() {
		var p = models.Post{}
		err = rows.Scan(&p.Content)
		if err != nil {
			log.Fatal(err.Error())
		}
		res = append(res, &p)
	}

	return res, nil
}

func (m *mysqlPostRepository) Store(*models.Post) error {

	return nil
}
