FROM node:latest
WORKDIR /app
RUN git clone https://github.com/gh-shgupta/healthcare.git
COPY .  /app
RUN apt install -y
EXPOSE 3000
CMD ["npm", "start"]
