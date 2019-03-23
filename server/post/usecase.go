package post

import "questions-board/server/models"

type Usecase interface {
	Store(*models.Post) ([]*models.Post, error)
}
