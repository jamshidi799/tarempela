FROM node:latest

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm install -g serve
RUN npm run-script build
RUN npm start

ENV HOST 0.0.0.0
