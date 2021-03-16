# use our prepared Raspberry Pi compatible Docker base image with Node.js
FROM node

ADD ./ /src
WORKDIR /src

RUN npm install

EXPOSE 5555

CMD ["node", "index.js"]