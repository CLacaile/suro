# SURO

Small quizz for long travels

## Stack

React for the frontend and json-server for the backend.

## Dev env installation

```bash
# Clone the project
git clone https://github.com/clacaile/suro.git

# FRONTEND
cd suro-frontend

# Install frontend
npm install

# Copy .env
cp .env.sample .env.local
echo "REACT_APP_SURO_API_URL=http://localhost:30000" > .env.local

# Run fronted (port 3000)
npm run start

# BACKEND
cd ../suro-api

# Copy .env
cp .env.sample .env
echo "SURO_FRONTEND_URL=http://localhost:30000" > .env
echo "PORT=30000" >> .env

# Install
npm install

# Run backend (port 30000)
npm run start
```

## Build and run prod images (recommended)

Don't forget to create a .env file based on the .env.sample file in the repo

```bash
docker compose up -d --build
```

## Manually build Docker prod images

```bash
# Build frontend
cd suro-frontend
docker build --build-arg REACT_APP_SURO_API_URL=http://my-suro-api-url:my-suro-api-port -f Dockerfile.prod -t suro-frontend:prod .

# Build backend
docker build -f Dockerfile.prod -t suro-api:prod .
```

*Important*: make sure that the build-arg REACT_APP_SURO_API_URL matches the api url and port otherwise the requests will not be allowed by the api CORS policy. That's why it is better to use the docker compose command along with a proper .env file.