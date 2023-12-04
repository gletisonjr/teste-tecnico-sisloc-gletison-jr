FROM node:16
EXPOSE 3001
WORKDIR /src
COPY package*.json ./
RUN chmod +x startup.sh
RUN npm install
RUN npm install -g sequelize-cli
COPY . .
CMD [ "npm", "start" ]
ENTRYPOINT [ "./startup.sh" ]