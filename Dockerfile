FROM node:latest
ADD . /code
WORKDIR /code
RUN ["npm", "install"]

EXPOSE 4000

ENTRYPOINT ["node", "src/server.js"]
