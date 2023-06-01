# Set the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Remove node_modules and package-lock.json
RUN rm -rf node_modules/
RUN rm -rf package-lock.json

# Install any needed packages specified in package.json
RUN npm install --force

# Copy the rest of the current directory contents into the container at /app
COPY . .

# Debug command to list files in src/assets/styles/
RUN ls -la src/assets/styles/

# Build tailwind css
RUN npm run build:tailwind

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD [ "npm", "start" ]
