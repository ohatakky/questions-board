package usecase

import (
	"questions-board/server/board"
	"questions-board/server/models"
)

type boardUsecase struct {
	boardRepo board.Repository
}

func NewBoardUsecase(br board.Repository) board.Usecase {
	return &boardUsecase{
		boardRepo: br,
	}
}

func (bu *boardUsecase) Check(url string) (*models.Board, error) {
	return nil, nil
}

func (bu *boardUsecase) Store(*models.Board) (string, error) {
	return "", nil
}
