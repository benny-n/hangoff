ARG serverPort=8080

FROM golang:1.18-alpine

ARG serverPort
ENV SERVER_PORT=${serverPort}
WORKDIR /app

COPY hangoff-server/go.mod ./
COPY hangoff-server/go.sum ./

RUN go mod download

COPY hangoff-server/ ./
# COPY hangoff-server/word ./

RUN go build -o /docker-hangoff-server

ENTRYPOINT [ "/docker-hangoff-server" ]