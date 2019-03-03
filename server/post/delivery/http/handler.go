package http

import (
	"net/http"
	"questions-board/server/models"
	"questions-board/server/post"

	"github.com/labstack/echo"
)

type HttpPostHandler struct {
	PUsecase post.Usecase
}

func NewHttpPostHandler(e *echo.Echo, pu post.Usecase) {
	handler := &HttpPostHandler{
		PUsecase: pu,
	}

	e.POST("/boards/:hash", handler.postPost)
}

func (h *HttpPostHandler) postPost(c echo.Context) error {
	content := c.FormValue("content")

	board := models.Board{}
	post := models.Post{Board: board, Content: content}
	h.PUsecase.Store(&post)

	return c.String(http.StatusOK, "post Post")
}
