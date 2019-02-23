package http

import (
	"net/http"
	"questions-board/board"

	"github.com/labstack/echo"
)

type HttpBoardHandler struct {
	BUsecase board.Usecase
}

func NewHttpBoardHandler(e *echo.Echo, bu board.Usecase) {
	handler := &HttpBoardHandler{
		BUsecase: bu,
	}

	e.GET("/boards", handler.getBoards)
	// e.POST("/boards", handler.storeBoard)
	// e.Get("/boards/xxx_hash_xxx", handler.getBoard)
}

func (h *HttpBoardHandler) getBoards(c echo.Context) error {

	return c.String(http.StatusOK, "return Boards in Admin")
}
