FROM node:16-alpine
ENV USER=node
# set working directory
WORKDIR /app

RUN npm install react-scripts@3.4.1 -g --silent
RUN chown -R $USER:$USER /app

USER $USER
# install app dependencies
COPY --chown=$USER:$USER package.json ./
COPY --chown=$USER:$USER package-lock.json ./
RUN npm install --silent

# add app
COPY --chown=$USER:$USER . .

# start app
CMD ["npm", "start"]