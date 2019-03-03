package http

import (
	"net/http"
	"questions-board/server/board"

	"github.com/labstack/echo"
)

type HttpBoardHandler struct {
	BUsecase board.Usecase
}

func NewHttpBoardHandler(e *echo.Echo, bu board.Usecase) {
	handler := &HttpBoardHandler{
		BUsecase: bu,
	}

	// hadlerが独立していてもechoのポインタ渡してるからOK。むしろそれがcleanのはず。
	e.POST("/boards", handler.storeBoard)      // ボード作成
	e.GET("/boards/:hash", handler.checkBoard) // ボードへアクセス
}

func (h *HttpBoardHandler) storeBoard(c echo.Context) error {

	return c.String(http.StatusOK, "store Board")
}

func (h *HttpBoardHandler) checkBoard(c echo.Context) error {

	return c.String(http.StatusOK, "check correct board")
}
