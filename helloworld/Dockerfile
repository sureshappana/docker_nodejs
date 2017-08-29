FROM node:alpine

WORKDIR /usr/src/nodeapp

RUN npm install -g nodemon@1.11.0

COPY package.json .
RUN npm install

#Bundle app sources
COPY . .

EXPOSE 40000

CMD ["npm", "start"]
