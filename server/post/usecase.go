package post

import "questions-board/server/models"

type Usecase interface {
	Get(*models.Board) ([]*models.Post, error)
	Store(*models.Post) error
}
