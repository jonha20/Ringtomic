# Backend
cd server
docker build -t jonha20/ringtomic-backend:latest .
docker push jonha20/ringtomic-backend:latest

# Frontend
cd ../client
docker build -t jonha20/ringtomic-frontend:latest .
docker push jonha20/ringtomic-frontend:latestt

docker pull jonha20/ringtomic-backend:latest
docker pull jonha20/ringtomic-frontend:latestt

# Instrucciones para levantar Ringtomic con Docker Compose

1. Clona el repositorio:
   ```sh
   git clone https://github.com/jonha20/ringtomic.git
   cd ringtomic
   renombra el .env.example por .env, en la raiz y en /client

docker-compose up --build