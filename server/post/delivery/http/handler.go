package http

import (
	"net/http"
	"server/models"
	"server/post"

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
	content := c.QueryParam("content")

	board := models.Board{}
	post := models.Post{Board: board, Content: content}
	h.PUsecase.Store(&post)

	return c.String(http.StatusOK, content)
}
