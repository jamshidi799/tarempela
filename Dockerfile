FROM node:latest

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn install
RUN yarn install -g serve
RUN yarn build
RUN yarn start

ENV HOST 0.0.0.0
