#initialise le build de l'image avec node
FROM node:14.15-alpine AS build
# ajoute des metadata à l'image
LABEL maintainer="Adama Diouf"="adamaniang@beopenit.com"
#Répertoire de travail
WORKDIR usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build
#appeler le serveur web nginx pour afficher le resultat
FROM nginx:latest
#on copie les elements de l'ancienne image pour l'afficher dans le serveur
COPY --from=build usr/src/app/dist/ab-testing /usr/share/nginx/html

