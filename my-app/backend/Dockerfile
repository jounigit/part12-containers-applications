FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY prisma ./prisma/

COPY . .

EXPOSE 3001

RUN npx prisma generate

CMD [ "npm", "run", "start" ]
