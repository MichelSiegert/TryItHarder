# stage 1 build the consumable

FROM node:alpine AS tryit
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2 get the files and consume to deploy the website.

FROM nginx:alpine
COPY --from=tryit /app/dist/tryit-harder /usr/share/nginx/html
EXPOSE 80
