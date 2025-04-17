# Build stage
FROM node:22-alpine AS build

# Instalar dependencias necesarias
RUN apk update && apk add --no-cache openssl

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install

# Copiar schema de Prisma y generar cliente
COPY prisma ./prisma
RUN pnpm prisma generate

# Copiar el resto del código y construir
COPY . .
RUN pnpm run build

# Production stage
FROM node:22-alpine

# Instalar dependencias necesarias
RUN apk update && apk add --no-cache openssl

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar archivos necesarios de la etapa de build
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./

# Generar cliente de Prisma para producción
RUN pnpm prisma generate

# Variables de entorno
ENV NODE_ENV=production

CMD ["pnpm", "run", "start:prod"] 
