package repository

import (
	"questions-board/server/board"
	"questions-board/server/models"
)

type mockBoardRepository struct {
}

func NewMockBoardRepository() board.Repository {
	return &mockBoardRepository{}
}

func (m *mockBoardRepository) Get(url string) (*models.Board, error) {
	sample := &models.Board{
		Url: "http://localhost:8080/boards/ndakvbdkalnvdavb",
	}

	return sample, nil
}

func (m *mockBoardRepository) Store(str_random string) (*models.Board, error) {
	sample := &models.Board{
		Url: "http://localhost:8080/boards/ndakvbdkalnvdavb",
	}

	return sample, nil
}
