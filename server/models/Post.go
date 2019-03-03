package models

type Post struct {
	Id      int64  `json:"id"`
	Board   Board  `json:"board"`
	Content string `json:"content"`
}
