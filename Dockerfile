# Stage 1

FROM node:10.5-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2

FROM arm64v8/nginx:latest
COPY --from=build-step /app/dist/* /usr/share/nginx/html
