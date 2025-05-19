# copy the base image 
FROM node:18-alpine 
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

# this creates a bulky file and now i am going to create a nother dockerflie.light 

#use alpiee as base image as it is less in size
