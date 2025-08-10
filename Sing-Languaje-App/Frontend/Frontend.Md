# Frontend Application - Sign Language Project

## Docker Container Management

### Build and Run Container (Manual Method)
```bash
docker build -t frontend-app .
```
```bash
docker run -d -p 8080:80 --name sign-language-frontend frontend-app
```
Access application at: http://localhost:8080
Docker Compose (Recommended Production Setup)
```bash
docker-compose up
```
Docker Compose Control Commands
```bash
# Run in detached mode
docker-compose up -d
```
```bash
# Stop containers
docker-compose stop
```
```bash
# Remove containers and networks
docker-compose down
```
```bash
# View container logs
docker-compose logs -f
```
```bash
# Rebuild images
docker-compose up --build
```
Troubleshooting Commands
```bash
# Change default port (if 8080 is occupied)
docker-compose down && docker-compose up -p 3000:80
```
# Full system cleanup
```bash
docker system prune -a --volumes
```
Project Setup Notes

    Node.js installation is optional when using Docker

    Code changes require image rebuild:

```bash

docker-compose up --build
```
    For local development with hot-reload:

```bash
npm run dev
```
(Requires local Node.js installation)
Basic Project Commands
```bash
git clone https://github.com/Ziscofania/Sing-Languaje-App-V3.git
```
```bash
cd Sing-Languaje-App-V3/Frontend
```
```bash
docker-compose up
```