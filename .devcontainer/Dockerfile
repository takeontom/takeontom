FROM node:19-bullseye

ARG DEV_USER=node

RUN apt-get update \
    # Project deps
    # && apt-get install -y \

    # Dev deps
    && apt-get install -y \
        bash-completion \
        git \
        vim

USER $DEV_USER:$DEV_USER
