FROM ruby:2.7

WORKDIR /blog

RUN gem install jekyll

EXPOSE 4000
