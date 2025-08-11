# Etapa de construcción
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de paquetes
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci && npm cache clean --force 

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]