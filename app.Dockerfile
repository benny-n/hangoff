FROM node:16-alpine as build
ENV USER=node
WORKDIR /app

RUN npm install react-scripts@3.4.1 -g --silent
RUN chown -R $USER:$USER /app

USER $USER
COPY ./hangoff-app/package.json ./
COPY ./hangoff-app/package-lock.json ./
RUN npm ci --silent
COPY ./hangoff-app/ ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]