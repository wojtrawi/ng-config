FROM cypress/browsers:node14.17.6-slim-chrome100-ff99-edge AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.19-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ng-config .

# CMD ["/bin/sh","-c","envsubst < assets/config.template.json > assets/config.json && nginx -g 'daemon off;'"]

# docker run -d --env DEPLOY_ENV=prod --env APP_VERSION=demo --name=web-server -p 4200:80 ngconfig
# docker run -d -v $(pwd)/external-config.json:/usr/share/nginx/html/assets/config.json --name=web-server -p 4200:80 ngconfig


