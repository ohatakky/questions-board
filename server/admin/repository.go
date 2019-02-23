package admin

import "questions-board/server/models"

type Repository interface {
	Get(interface{}) bool
	Store(*models.Admin) error
	// Update()
	// Delete()
}
