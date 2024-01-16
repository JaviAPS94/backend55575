# Primero vamos a definir la imagen que vamos a tomar como base
FROM node:16.17.1-alpine3.16

# Vamos a trabajar en la configuración interna de nuestro contenedor
# Vamos a definir el directorio de trabajo dentro de nuestro contenedor
WORKDIR /app

# Vamos a copiar nuestro package.json dentro del contenedor
COPY package*.json ./

# Vamos a instalar las dependencias de mi app dentro del contenedor
RUN npm install

# Copiar el resto de archivos, esto incluye nuestro código app.js
COPY . .

# De mi contenedor quiero exponer el puerto 3030 para conectarme a mi app desde mi computador local
EXPOSE 3030

# Definimos el comando que se ejecutará al iniciar el contenedor
CMD ["npm", "start"]