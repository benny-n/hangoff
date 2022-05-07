package main

import (
	"fmt"
	"os"

	"github.com/benny-n/hangoff/hangoff-server/word"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	r := gin.Default()
	r.SetTrustedProxies(nil)
	r.GET("/word/:word", word.WordGET)
	port := os.Getenv("SERVER_PORT")
	r.Run(fmt.Sprintf("0.0.0.0:%v", port))
}
