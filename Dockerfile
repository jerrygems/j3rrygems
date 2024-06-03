FROM node:14
WORKDIR /root/app
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm start","start"]
