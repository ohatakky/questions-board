package post

import "questions-board/server/models"

type Usecase interface {
	Get(*models.Board) ([]*models.Post, error)
	Store(*models.Post) error
	Update(*models.Post) error
	Delete(Id int64) error
}