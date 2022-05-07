package main

import (
	"fmt"
	"os"
	"log"
//     docs "github.com/benny-n/hangoff/hangoff-server/docs"
	"github.com/benny-n/hangoff/hangoff-server/word"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title Swagger Example API
// @version 1.0
// @description This is a sample server Petstore server.
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host petstore.swagger.io
// @BasePath /v2


func main() {
	godotenv.Load()
	r := gin.Default()
	r.SetTrustedProxies(nil)
<<<<<<< HEAD
	r.GET("/word/:word", word.WordGET)
	port := os.Getenv("SERVER_PORT")
=======
	port := os.Getenv("PORT")
	swaggerUrl := fmt.Sprintf("http://localhost:%v/swagger/doc.json", port)
	log.Println(swaggerUrl)
    ginSwagger.WrapHandler(swaggerFiles.Handler,
        ginSwagger.URL(swaggerUrl),
        ginSwagger.DefaultModelsExpandDepth(-1))
    r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
    r.GET("/word/:word", word.WordGET)

>>>>>>> 88fea8a (Added some integration - no POC yet)
	r.Run(fmt.Sprintf("0.0.0.0:%v", port))
}
