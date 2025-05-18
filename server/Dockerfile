#get the base image
FROM node:18
#creating directory in docker
WORKDIR /app
#copy packages in docker
COPY package*.json ./
#install packages
RUN npm install 
# copy rest of the things
COPY . .
#command to run 

CMD ["npm","start"]
