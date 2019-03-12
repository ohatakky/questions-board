package usecase

import (
	"crypto/rand"
	"encoding/binary"
	"log"
	"questions-board/server/board"
	"questions-board/server/models"
	"questions-board/server/post"
	"strconv"
)

type boardUsecase struct {
	boardRepo board.Repository
	postRepo  post.Repository
}

func NewBoardUsecase(br board.Repository, pr post.Repository) board.Usecase {
	return &boardUsecase{
		boardRepo: br,
		postRepo:  pr,
	}
}

func (bu *boardUsecase) Check(url string) ([]*models.Post, error) {

	b, err := bu.boardRepo.Get(url)
	if err != nil || b.Id == 0 {
		return nil, err
	}

	posts, err := bu.postRepo.Get(b)
	if err != nil {
		return nil, err
	}

	return posts, err
}

func (bu *boardUsecase) Store() (string, error) {

	str_random := random()
	board, err := bu.boardRepo.Store(str_random)
	if err != nil {
		log.Fatal(err)
	}

	url := board.Url

	return url, err
}

func random() string {
	var n uint64
	binary.Read(rand.Reader, binary.LittleEndian, &n)
	return strconv.FormatUint(n, 36)
}
