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
	e.GET("/boards", handler.getBoards) // ボード一覧
	// e.POST("/boards", handler.storeBoard) // ボード作成
	// e.Get("/boards/:hash", handler.getBoard) // ボードへアクセス
}

func (h *HttpBoardHandler) getBoards(c echo.Context) error {

	return c.String(http.StatusOK, "return Boards in Admin")
}
