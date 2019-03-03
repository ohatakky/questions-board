package usecase

import (
	"log"
	"questions-board/server/board"
	"questions-board/server/models"
	"questions-board/server/post"
)

type boardUsecase struct {
	boardRepo board.Repository
	postRepo  post.Repository
}

func NewBoardUsecase(br board.Repository) board.Usecase {
	return &boardUsecase{
		boardRepo: br,
	}
}

func (bu *boardUsecase) Check(url string) ([]*models.Post, error) {

	b, err := bu.boardRepo.Get(url)
	if err != nil {
		log.Fatal(err)
	}

	posts, err := bu.postRepo.Get(b)

	return posts, err
}

func (bu *boardUsecase) Store(*models.Board) (string, error) {
	return "", nil
}
