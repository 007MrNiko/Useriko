FROM node
USER root
WORKDIR /frontend
COPY . /frontend

RUN yarn
RUN yarn build

EXPOSE 3000
CMD ["npm", "start"]