package usecase

import (
	"log"
	"questions-board/server/board"
	"questions-board/server/models"
	"questions-board/server/post"
)

type postUsecase struct {
	boardRepo board.Repository
	postRepo  post.Repository
}

func NewPostUsecase(br board.Repository, pr post.Repository) post.Usecase {
	return &postUsecase{
		boardRepo: br,
		postRepo:  pr,
	}
}

func (pu *postUsecase) Store(p *models.Post) error {

	url := p.Board.Url
	_, err1 := pu.boardRepo.Get(url)
	if err1 != nil {
		log.Fatal(err1)
	}

	// ボードへのアクセスが正しければstore
	err2 := pu.postRepo.Store(p)
	if err2 != nil {
		log.Fatal(err2)
	}

	return nil
}
