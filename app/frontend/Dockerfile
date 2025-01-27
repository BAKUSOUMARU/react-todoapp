FROM node:lts

# Set working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json for caching
COPY ./app/frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY app/frontend/ .

# Expose the port and run the app
EXPOSE 3000
CMD ["npm", "start"]
