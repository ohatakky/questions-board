package board

import "questions-board/server/models"

type Usecase interface {
	Check(url string) ([]*models.Post, error)
	Store(*models.Board) (string, error)
}
