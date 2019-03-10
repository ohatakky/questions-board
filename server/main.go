package main

import (
	_boardDelivery "server/board/delivery/http"
	_boardRepo "server/board/repository"
	_boardUsecase "server/board/usecase"
	_postDelivery "server/post/delivery/http"
	_postRepo "server/post/repository"
	_postUsecase "server/post/usecase"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	boardRepo := _boardRepo.NewMockBoardRepository()
	postRepo := _postRepo.NewMockPostRepository()
	boardUsecase := _boardUsecase.NewBoardUsecase(boardRepo, postRepo)
	postUsecase := _postUsecase.NewPostUsecase(boardRepo, postRepo)
	e := echo.New()
	e.Use(middleware.CORS())
	_boardDelivery.NewHttpBoardHandler(e, boardUsecase)
	_postDelivery.NewHttpPostHandler(e, postUsecase)
	e.Logger.Fatal(e.Start(":8080"))
}
