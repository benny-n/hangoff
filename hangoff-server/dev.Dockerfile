ARG port=8080

FROM golang:1.18-alpine

ARG port
ENV PORT=${serverPort}
WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .
# COPY hangoff-server/word ./

RUN go build -o /docker-hangoff-server

ENTRYPOINT [ "/docker-hangoff-server" ]