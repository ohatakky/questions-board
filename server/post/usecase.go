package post

import "server/models"

type Usecase interface {
	Store(*models.Post) error
}
