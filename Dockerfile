FROM node:latest

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}


RUN npm install
RUN npm install -g serve
RUN npm run build

ENV HOST 0.0.0.0

