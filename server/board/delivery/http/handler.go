package http

import (
	"fmt"
	"log"
	"net/http"
	"server/board"

	"github.com/labstack/echo"
)

type HttpBoardHandler struct {
	BUsecase board.Usecase
}

func NewHttpBoardHandler(e *echo.Echo, bu board.Usecase) {
	handler := &HttpBoardHandler{
		BUsecase: bu,
	}

	e.POST("/boards", handler.storeBoard)
	e.GET("/boards/:hash", handler.checkBoard)
}

func (h *HttpBoardHandler) storeBoard(c echo.Context) error {

	url, err := h.BUsecase.Store()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("debug : called")

	return c.String(http.StatusOK, url)
}

func (h *HttpBoardHandler) checkBoard(c echo.Context) error {

	hash := c.Param("hash")
	posts, err := h.BUsecase.Check(hash)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(posts)

	return c.JSON(http.StatusOK, posts)
}
