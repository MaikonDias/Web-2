FROM node:14
COPY package*.json ./
RUN npm install
CMD [ "node", "run dev" ]