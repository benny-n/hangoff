FROM node:16-alpine as build
ENV USER=node
WORKDIR /app

RUN npm install react-scripts@3.4.1 -g --silent
RUN chown -R $USER:$USER /app

USER $USER
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY ./src ./src
COPY ./public ./public
COPY ./static.json ./static.json
COPY ./tsconfig.json ./tsconfig.json
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY nginx/conf.template /etc/nginx/conf.d/conf.template
EXPOSE 80
# CMD [ "/bin/sh", "-c", "envsubst < /etc/nginx/conf.d/conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'" ]
ENTRYPOINT ["nginx", "-g", "daemon off;"]