package repository

import (
	"database/sql"
	"fmt"
	"log"
	"questions-board/server/board"
	"questions-board/server/models"
)

type mysqlBoardRepository struct {
	Conn *sql.DB
}

func NewMysqlBoardRepository(Conn *sql.DB) board.Repository {
	return &mysqlBoardRepository{Conn}
}

func (m *mysqlBoardRepository) Get(url string) (*models.Board, error) {
	query := fmt.Sprintf("SELECT id, url FROM board WHERE url = '%s'", url)
	rows, err := m.Conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var b = models.Board{}
	for rows.Next() {
		err = rows.Scan(&b.Id, &b.Url)
		if err != nil {
			return nil, err
		}
	}

	return &b, err
}

func (m *mysqlBoardRepository) Store(str_random string) (*models.Board, error) {
	query := fmt.Sprintf("INSERT INTO board (url) VALUES('%s')", str_random)
	_, err := m.Conn.Exec(query)
	if err != nil {
		log.Fatal(err.Error())
	}

	board, err := m.Get(str_random)
	if err != nil {
		log.Fatal(err.Error())
	}

	return board, err

}
