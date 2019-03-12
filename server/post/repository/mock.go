package repository

import (
	"questions-board/server/models"
	"questions-board/server/post"
)

type mockPostRepository struct {
}

func NewMockPostRepository() post.Repository {
	return &mockPostRepository{}
}

func (m *mockPostRepository) Get(*models.Board) ([]*models.Post, error) {
	sample_board_1 := models.Board{
		Url: "http://localhost:8080/boards/ndakvbdkalnvdavb",
	}
	sample_post_1 := &models.Post{
		Id:      1,
		Board:   sample_board_1,
		Content: "sample_post_1",
	}
	sample_board_2 := models.Board{
		Url: "http://localhost:8080/boards/43tngk2g2gn22",
	}
	sample_post_2 := &models.Post{
		Id:      2,
		Board:   sample_board_2,
		Content: "sample_post_2",
	}
	sample := []*models.Post{sample_post_1, sample_post_2}

	return sample, nil
}

func (m *mockPostRepository) Store(*models.Post) error {

	return nil
}
