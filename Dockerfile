From node:25-slim

WORKDIR /work

COPY package.json package-lock.json ./

RUN npm install

CMD ["npm", "run", "dev"]