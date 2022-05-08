package main

import (
	"fmt"
	"os"

	docs "github.com/benny-n/hangoff/hangoff-server/docs"
	"github.com/benny-n/hangoff/hangoff-server/word"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title           Hangoff-server
// @version         1.0
// @description     This is a sample server celler server.
// @termsOfService  http://swagger.io/terms/

func main() {
	godotenv.Load()
	r := gin.Default()
	r.SetTrustedProxies(nil)
	port := os.Getenv("PORT")
	docs.SwaggerInfo.BasePath = "/api/v1"
	v1 := r.Group("/api/v1")
	{
		v1.GET("/word/:word", word.WordGET)
	}
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	r.Run(fmt.Sprintf("0.0.0.0:%v", port))
}
