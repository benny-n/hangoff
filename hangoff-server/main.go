package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

const MAX_NUMBER_OF_WORKERS = 5

func scanWords(w string, s []string, c chan bool) {
	for _, wordField := range s {
		word := strings.Split(wordField, "\"")[1]
		if word == w {
			c <- true
			return
		}
	}
	c <- false
}

func wordGET(c *gin.Context) {
	word := c.Param("word")
	resp, err := http.Get(os.Getenv("VOCABULARY_URI"))
	if err != nil {
		log.Fatal(err)
	}
	body, readErr := ioutil.ReadAll(resp.Body)
	if readErr != nil {
		log.Fatal(readErr)
	}
	data := string(body)
	dataParts := strings.Split(data, ",")
	chunk := len(dataParts) / MAX_NUMBER_OF_WORKERS
	ch := make(chan bool)
	defer close(ch)
	for i := 0; i < MAX_NUMBER_OF_WORKERS; i++ {
		go func(i int) {
			scanWords(word, dataParts[i*(chunk):(i+1)*(chunk)], ch)
		}(i)
	}
	var isFound bool
	for i := 0; i < MAX_NUMBER_OF_WORKERS; i++ {
		isFound = <-ch || isFound
	}
	if isFound {
		c.Data(200, "text/plain", []byte(fmt.Sprintf("%s is a valid word!", word)))
	} else {
		c.Data(404, "text/plain", []byte(fmt.Sprintf("%s is not a valid word!", word)))
	}
}

func main() {
	godotenv.Load()
	r := gin.Default()
	r.SetTrustedProxies(nil)
	r.GET("/word/:word", wordGET)
	port := os.Getenv("PORT")
	r.Run(fmt.Sprintf("0.0.0.0:%v", port))
}
