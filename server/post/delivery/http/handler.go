package http

import (
	"log"
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
	hash := c.Param("hash")
	content := c.QueryParam("content")

	board := models.Board{Url: hash}
	post := models.Post{Board: board, Content: content}
	err := h.PUsecase.Store(&post)
	if err != nil {
		log.Fatal(err)
	}

	return c.String(http.StatusOK, "stored")
}
