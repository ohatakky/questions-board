package board

import "questions-board/server/models"

type Repository interface {
	Get(*models.Admin) ([]*models.Board, error)
	Store(*models.Board) error
	Update(*models.Board) error
	Delete(Id int64) error
}
