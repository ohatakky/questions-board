package post

import "questions-board/server/models"

type Repository interface {
	Get(*models.Board) ([]*models.Post, error)
	Store(*models.Post) ([]*models.Post, error)
}
