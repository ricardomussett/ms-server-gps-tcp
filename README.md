<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Un framework progresivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones del lado del servidor eficientes y escalables.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

Repositorio inicial del framework [Nest](https://github.com/nestjs/nest) con TypeScript.

### Acerca del Microservicio

Este microservicio está diseñado para manejar comunicaciones TCP con dispositivos GPS, proporcionando las siguientes funcionalidades:

- Servidor TCP para recibir datos de dispositivos GPS en tiempo real
- API REST para consultar y gestionar la información de los dispositivos
- Almacenamiento de datos en PostgreSQL
- Caché y manejo de sesiones con Redis
- Procesamiento y validación de datos GPS
- Sistema de monitoreo en tiempo real

La arquitectura del servicio está compuesta por:
- Servidor TCP para comunicación directa con dispositivos
- API REST para integración con otros servicios
- Base de datos PostgreSQL para almacenamiento persistente
- Redis para caché y manejo de sesiones
- Sistema de logs para monitoreo

## Configuración del Proyecto

```bash
$ pnpm install
```

## Compilación y Ejecución del Proyecto

```bash
# desarrollo
$ pnpm run start

# modo observador
$ pnpm run start:dev

# modo producción
$ pnpm run start:prod
```

## Ejecución de Pruebas

```bash
# pruebas unitarias
$ pnpm run test

# pruebas e2e
$ pnpm run test:e2e

# cobertura de pruebas
$ pnpm run test:cov
```

## Despliegue

### Despliegue con Docker

Para desplegar la aplicación usando Docker, sigue estos pasos:

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd ms-server-gps-tcp
```

2. Crear el archivo `.env` con las siguientes variables (ver ejemplo más abajo)

3. Construir las imágenes:
```bash
docker compose build
```

4. Iniciar los servicios:
```bash
docker compose up -d
```

5. Para detener los servicios:
```bash
docker compose down
```

### Variables de Entorno (.env)

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Configuración del Servidor
PORT=3000
TCP_PORT=3001

# Base de datos PostgreSQL
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/msservergpstcp"

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=1
REDIS_KEY_PREFIX=truck

# Configuración de Whitelist
WHITELIST_REFRESH_INTERVAL=180000

# Configuración de Colas
QUEUE_RETRY_ATTEMPTS=3
QUEUE_RETRY_DELAY=1000
```

### Verificar el estado de los servicios

Para verificar que todos los servicios están funcionando correctamente:

```bash
# Ver logs de la aplicación
docker compose logs -f app

# Ver logs de la base de datos
docker compose logs -f postgres

# Ver logs de Redis
docker compose logs -f redis
```


