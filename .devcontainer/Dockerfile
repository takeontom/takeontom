FROM node:14-buster

ARG DEV_USER=node

RUN apt-get update \
    # Project deps
    && apt-get install -y \
    graphicsmagick \
    # Dev deps
    && apt-get install -y \
    bash-completion \
    git \
    vim

USER $DEV_USER:$DEV_USER

WORKDIR /workspace
COPY --chown=$DEV_USER:$DEV_USER package.json /workspace
RUN npm install && rm package.json
VOLUME /workspace
