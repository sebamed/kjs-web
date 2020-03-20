# FROM node:11.1-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
ENV VUE_APP_API_URL http://46.101.132.133:8000/api
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]