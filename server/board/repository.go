package board

import "questions-board/server/models"

type Repository interface {
	Get(url string) (*models.Board, error)
	Store() (*models.Board, error)
}
