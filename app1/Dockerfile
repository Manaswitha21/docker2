FROM node:20-alpine

WORKDIR /manu/new/

COPY package.json .
COPY student.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "student.js"]