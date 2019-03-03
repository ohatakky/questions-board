package main

import (
	_boardDelivery "questions-board/server/board/delivery/http"
	_boardRepo "questions-board/server/board/repository"
	_boardUsecase "questions-board/server/board/usecase"
	_postDelivery "questions-board/server/post/delivery/http"
	_postRepo "questions-board/server/post/repository"
	_postUsecase "questions-board/server/post/usecase"

	"github.com/labstack/echo"
)

func main() {
	boardRepo := _boardRepo.NewMockBoardRepository()
	boardUsecase := _boardUsecase.NewBoardUsecase(boardRepo)
	postRepo := _postRepo.NewMockPostRepository()
	postUsecase := _postUsecase.NewPostUsecase(postRepo)
	e := echo.New()
	_boardDelivery.NewHttpBoardHandler(e, boardUsecase)
	_postDelivery.NewHttpPostHandler(e, postUsecase)
	e.Logger.Fatal(e.Start(":1234"))
}
