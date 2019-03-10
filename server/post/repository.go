package post

import "server/models"

type Repository interface {
	Get(*models.Board) ([]*models.Post, error)
	Store(*models.Post) error
}
