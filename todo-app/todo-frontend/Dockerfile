FROM node:16 AS base

WORKDIR /usr/src/app

COPY . .

FROM base AS test

RUN npm ci --legacy-peer-deps

ENV CI=true

RUN npm test

FROM test AS build-stage

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api/

RUN npm ci --legacy-peer-deps

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


