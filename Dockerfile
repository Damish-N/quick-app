# Stage 1: Build the React app
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# Stage 3: Run the app
# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/build /app/build
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]
# FROM node:18-alpine
# WORKDIR /app