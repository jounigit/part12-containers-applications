FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_API_URL=http://localhost:3001/api/

RUN npm ci

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "deamon-off;" ]
