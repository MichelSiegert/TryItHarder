# stage 1

FROM node:alpine AS tryit-harder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=tryitharder /dist/tryit-harder /usr/share/nginx/html
EXPOSE 80
