ARG serverPort=8080

FROM golang:1.18-alpine as build

ARG serverPort
ENV SERVER_PORT=${serverPort}
WORKDIR /app

COPY hangoff-server/go.mod ./
COPY hangoff-server/go.sum ./

RUN go mod download

COPY hangoff-server/ ./
# COPY hangoff-server/word ./

RUN go build -o /docker-hangoff-server

FROM alpine:3.9

ARG serverPort
ENV SERVER_PORT=${serverPort}
ENV USER=nobody
USER $USER:$USER
WORKDIR /

COPY --from=build --chown=$USER:$USER /docker-hangoff-server/ /docker-hangoff-server

EXPOSE $SERVER_PORT

ENTRYPOINT [ "/docker-hangoff-server" ]