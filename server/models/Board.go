package models

import "time"

type Board struct {
	Id        int64     `json:"id"`
	Url       string    `json:"url"`
	CreatedAt time.Time `json:"created_at"`
	UpadtedAt time.Time `json:"updated_at"`
}
