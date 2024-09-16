# Fetching the minified node image on apline linux
FROM node:slim

# Copying all the files in our project
COPY . .

ENV MONGO_URL=mongodb://karczubroland:kvyuHjgo8Bi2W9!@157.173.120.239:27017/portfolio
# Installing dependencies
RUN npm install

RUN npm run build

# Starting our application
CMD [ "npm", "run", "start" ]