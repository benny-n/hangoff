ARG port=8080

FROM golang:1.18-alpine as build

ARG port
ENV SERVER_PORTPORT=${port}
WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .
# COPY hangoff-server/word ./

RUN go build -o /docker-hangoff-server

FROM alpine:3.9

ARG port
ENV PORT=${port}
ENV USER=nobody
USER $USER:$USER
WORKDIR /

COPY --from=build --chown=$USER:$USER /docker-hangoff-server/ /docker-hangoff-server

EXPOSE $PORT

ENTRYPOINT [ "/docker-hangoff-server" ]