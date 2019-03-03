package usecase

import (
	"questions-board/server/board"
	"questions-board/server/models"
)

type boardUsecase struct {
	boardRepo board.Repository
}

func NewBoardUsecase(b board.Repository) board.Usecase {
	return &boardUsecase{
		boardRepo: b,
	}
}

func (b *boardUsecase) Check(url string) (*models.Board, error) {
	return nil, nil
}

func (b *boardUsecase) Store(*models.Board) error {
	return nil
}
