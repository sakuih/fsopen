FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /ui-phonebook
EXPOSE 3001
CMD ["npm", "build:ui"]
CMD ["npm", "start"]
