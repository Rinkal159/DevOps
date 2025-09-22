FROM node
LABEL maintainer='rinkal singapuri'

WORKDIR / app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8917
CMD ["npm", "run", "dev"]