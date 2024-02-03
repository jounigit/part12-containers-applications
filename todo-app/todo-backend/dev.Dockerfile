FROM node:16

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

ENV DEBUG=todo-backend:*

# RUN npm run dev

CMD ["npm", "run", "dev"]