FROM node:14.16.0

WORKDIR /server

ENV PATH /server/node_modules/.bin:$PATH

# Diretório de trabalho
#COPY package.json package-lock.json knexfile.js server.js /server/
COPY package.json package-lock.json db.js alunos.js server.js /server/

RUN npm install  

RUN npm ci

CMD ["npm", "start"]