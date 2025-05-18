# copy the base image 
FROM node:18 
#create a working directory in docker
WORKDIR /app
#copy the packages to the docker
COPY package*.json ./
# install all needes
RUN npm install
# now copy the remaining things to docker again
COPY . .
#command to run the react 
CMD ["npm","run","dev"]
