FROM node:8-slim

WORKDIR /server
COPY . /server

RUN npm install
EXPOSE 6000

CMD ["tsc"]
CMD ["npm", "start"]