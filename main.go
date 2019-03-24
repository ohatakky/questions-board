package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	_boardDelivery "questions-board/server/board/delivery/http"
	_boardRepo "questions-board/server/board/repository"
	_boardUsecase "questions-board/server/board/usecase"
	_postDelivery "questions-board/server/post/delivery/http"
	_postRepo "questions-board/server/post/repository"
	_postUsecase "questions-board/server/post/usecase"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

// func init() {
// 	abs_path, _ := filepath.Abs(".")

// 	godotenv.Load(fmt.Sprintf("%s/.env", abs_path))
// }

func main() {
	dbUser := os.Getenv("dbUser")
	dbPass := os.Getenv("dbPass")
	dbName := os.Getenv("dbName")
	dbHost := os.Getenv("dbHost")
	connection := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8", dbUser, dbPass, dbHost, dbName)

	db, err := sql.Open(`mysql`, connection)
	if err != nil {
		log.Fatal(err.Error())
	}
	defer db.Close()
	db.SetConnMaxLifetime(time.Second * 20)
	db.SetMaxIdleConns(0)
	db.SetMaxOpenConns(150)

	boardRepo := _boardRepo.NewMysqlBoardRepository(db)
	postRepo := _postRepo.NewMysqlPostRepository(db)
	boardUsecase := _boardUsecase.NewBoardUsecase(boardRepo, postRepo)
	postUsecase := _postUsecase.NewPostUsecase(boardRepo, postRepo)
	e := echo.New()
	e.Use(middleware.CORS())
	_boardDelivery.NewHttpBoardHandler(e, boardUsecase)
	_postDelivery.NewHttpPostHandler(e, postUsecase)
	e.HTTPErrorHandler = func(err error, c echo.Context) {
		if he, ok := err.(*echo.HTTPError); ok {
			if he.Code == 404 {
				c.HTML(http.StatusNotFound, "<strong>404</strong>")
			} else {
				c.HTML(http.StatusInternalServerError, "<strong>500</strong>")
			}
		}
	}
	e.Logger.Fatal(e.Start(":8080"))
}
