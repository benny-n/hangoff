# Development In Docker

```bash
$ docker build -t hangoff:app-dev -f hangoff-app/dev.Dockerfile ./hangoff-app
```

Build the server image using the following command

```bash
$ docker build -t hangoff:server-dev -f hangoff-server/dev.Dockerfile ./hangoff-server
```

Run development containers using the command shown below.
*Note that development environment requires local dependencies has to be installed*
```bash
$ docker-compose -f dev.docker-compose.yml up -d
```

# Production In Docker

Build the app image using the following command

```bash
$ docker build -t hangoff:app -f hangoff-app/Dockerfile ./hangoff-app
```

Build the server image using the following command

```bash
$ docker build -t hangoff:server -f hangoff-serverDockerfile ./hangoff-server
```

Run production containers using the command shown below.

```bash
$ docker-compose up -d
```

## Environment Variables

| Variable | Default Value |
| ------ | ------ |
| SERVER_PORT | 5545 |
| VOCABULARY_URI |  |

**Please Make Sure to run DB container as well and also the netwrok is the same docker network**