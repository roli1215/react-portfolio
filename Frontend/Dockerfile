FROM node

WORKDIR /app

COPY package.json .
RUN npm i

ENV VITE_API_URL=http://157.173.120.239:3000

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]