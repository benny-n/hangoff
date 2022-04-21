package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.Data(200, "text/plain", []byte("Hello World!"))
	})
	r.Run("0.0.0.0:5545") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
