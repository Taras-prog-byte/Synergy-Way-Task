# stage 1
FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/Synergy-Way /usr/share/nginx/html
