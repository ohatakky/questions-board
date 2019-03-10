package board

import "server/models"

type Usecase interface {
	Check(url string) ([]*models.Post, error)
	Store() (string, error)
}
