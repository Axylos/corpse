FROM mhart/alpine-node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /client
WORKDIR /client
COPY . ./

RUN yarn install
CMD yarn start
