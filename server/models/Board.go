package models

import "time"

type Board struct {
	Id        int64
	Url       string
	CreatedAt time.Time
	UpadtedAt time.Time
	DeletedAt time.Time
}
