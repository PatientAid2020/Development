FROM node:lts-alpine

WORKDIR /app

RUN npm install react-scripts@3.4.1 \
                @testing-library/react@9.5.0 \
                @testing-library/jest-dom@4.2.4 \
                @testing-library/user-event@7.2.1

COPY package.json /app/package.json

COPY package-lock.json /app/package-lock.json

RUN npm install

CMD ["npm", "start"]
