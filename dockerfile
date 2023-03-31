# Use an official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json file to the container
#COPY package.json ./
COPY . /app

# Install the required dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React application
#RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
# Serve the built files using nginx
FROM nginx
COPY --fr
