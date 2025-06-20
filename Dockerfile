FROM node:22.0-slim AS builder

WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]