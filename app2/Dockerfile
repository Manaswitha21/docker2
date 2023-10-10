FROM node:20-alpine

WORKDIR /manu/new/

COPY package.json .
COPY university.js .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "university.js"]