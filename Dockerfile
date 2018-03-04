# use NGINX as base image --> fast static files hosting web server
FROM nginx:alpine

# copy the webserver configuration into the image
#COPY infrastructure/nginx.conf /etc/nginx/nginx.conf

# copy built web app into the image
COPY dist /usr/share/nginx/html
