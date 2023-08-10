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

# Install
npm install

# Run backend (port 30000)
npm run start
```

## Build Docker prod images

```bash
# Build frontend
cd suro-frontend
docker build -f Dockerfile.prod -t suro-frontend:prod .

# Build backend
docker build -f Dockerfile.prod -t suro-api:prod .
```

## Run prod images

```bash
docker compose up -d
```