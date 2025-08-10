# Frontend - Sign Language App  

**Proyecto frontend para una aplicación de lenguaje de señas**  

---

## Requisitos Previos  
Asegúrate de tener instalado:  
- [Node.js](https://nodejs.org/) (v18 o superior)  
- [Docker](https://www.docker.com/) (opcional, para ejecutar en contenedor)  
- [Git](https://git-scm.com/)  

---

## Configuración Inicial  

### **1. Clonar el repositorio**  
```bash
git clone https://github.com/Ziscofania/Sing-Languaje-App-V3.git
```
```bash
cd sign-language-app/Frontend
```

### **2. Instalar dependencias**
```bash

npm install

Librerías principales

    Vite (build tool)

    React (opcional, si lo usas)

    TypeScript

    Otras dependencias (listarlas si son clave, ej: axios, react-router-dom)
```
Ejecución Local
Modo desarrollo (con hot-reload)

```bash
npm run dev
```
🔹 Abre tu navegador en: http://localhost:5173
Build para producción
```bash

npm run build
```
📁 Los archivos estáticos se generan en /dist.
🐳 Dockerización
1. Construir la imagen Docker
```bash

docker build -t frontend-app .
```
2. Ejecutar el contenedor
```bash

docker run -d -p 8080:80 --name sign-language-frontend frontend-app
```
# Abre: http://localhost:8080
```bash
