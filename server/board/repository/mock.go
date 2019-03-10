package repository

import (
	"server/board"
	"server/models"
)

type mockBoardRepository struct {
}

func NewMockBoardRepository() board.Repository {
	return &mockBoardRepository{}
}

func (m *mockBoardRepository) Get(url string) (*models.Board, error) {
	sample := &models.Board{
		Url: "/boards/ndakvbdkalnvdavb",
	}

	return sample, nil
}

func (m *mockBoardRepository) Store(str_random string) (*models.Board, error) {
	sample := &models.Board{
		Url: "/boards/ndakvbdkalnvdavb",
	}

	return sample, nil
}
