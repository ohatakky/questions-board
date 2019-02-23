package models

type Post struct {
	Id      int64
	Board   Board
	Content string
}
