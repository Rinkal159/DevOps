FROM node
LABEL maintainer="Rinkal Singapuri"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8008
CMD ["npm", "run", "dev"]