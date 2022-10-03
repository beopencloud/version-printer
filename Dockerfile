FROM node:14 as ui


#build UI
WORKDIR /usr/src/app/ui


COPY ./ui ./ui

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm build
FROM node:14 as api
#build API
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY app.js .
COPY --from=ui usr/src/app/ui usr/src/app/ui

#RUN ls -la

#RUN ls -la ui


RUN npm install
RUN npm build

FROM nginx:latest

COPY --from=api usr/src/app usr/src/app

RUN cp -r usr/src/app usr/share/nginx/html
#EXPOSE 8080
#CMD [ "node", "app.js" ]