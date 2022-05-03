# Development In Docker

```bash
$ docker build -t hangoff:app-dev -f app.dev.Dockerfile .
```

Build the server image using the following command

```bash
$ docker build -t hangoff:server-dev -f server.dev.Dockerfile .
```

Run development containers using the command shown below.
*Note that development environment requires local dependencies has to be installed*
```bash
$ docker-compose -f dev.docker-compose.yml up -d
```

# Production In Docker

Build the app image using the following command

```bash
$ docker build -t hangoff:app -f app.Dockerfile .
```

Build the server image using the following command

```bash
$ docker build -t hangoff:server -f server.Dockerfile .
```

Run production containers using the command shown below.

```bash
$ docker-compose up -d
```

## Environment Variables

| Variable | Default Value |
| ------ | ------ |
| SERVER_PORT | 8080 |

**Please Make Sure to run DB container as well and also the netwrok is the same docker network**