FROM node:14.16.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Diretório de trabalho
COPY package.json package-lock.json /app/

# Instalando dependências da aplicação e armazenando em cache.
RUN npm install --silent

# Inicializa a aplicação
CMD ["npm", "start"]

