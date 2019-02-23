package post

import "questions-board/models"

type Repository interface {
	Get(*models.Board) ([]*models.Post, error)
	Store(*models.Post) error
	Update(*models.Post) error
	Delete(Id int64) error
}
