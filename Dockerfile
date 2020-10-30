FROM node:12.16.1-alpine3.11 as app-builder

WORKDIR /opt/app
COPY . /opt/app

RUN npm i --no-optional
RUN npm run build-prod

FROM nginx:1.17.8-alpine

RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=app-builder /opt/app/dist/lolot-ui /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
