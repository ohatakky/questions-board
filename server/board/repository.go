package board

import "server/models"

type Repository interface {
	Get(url string) (*models.Board, error)
	Store(string) (*models.Board, error)
}
