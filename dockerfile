//FROM node:latest
FROM alpine:3.16
ENV  NODE_VERSION 19.8.1
WORKDIR /app
RUN git clone https://github.com/gh-shgupta/healthcare.git
COPY .  /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
