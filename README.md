---
title: "DocTrack"
description: "Plataforma de gestión de turnos médicos."
---

# DocTrack

DocTrack es una aplicación para la gestión de turnos médicos. Permite a los usuarios agendar turnos en fechas y horas específicas para asistir a consultas médicas en un lugar determinado. Este proyecto busca facilitar y optimizar la administración de citas médicas tanto para pacientes como para profesionales de la salud.

## Propósito

El propósito principal de DocTrack es proporcionar una plataforma sencilla y eficiente para que los usuarios puedan gestionar sus turnos médicos. Con una interfaz intuitiva, los usuarios pueden registrar una cuenta, iniciar sesión, agendar y visualizar sus turnos, así como cancelar citas si es necesario.

## Funcionalidades Principales

- **Registro de Usuario**: Permite a los nuevos usuarios crear una cuenta en la plataforma.
- **Inicio de Sesión**: Los usuarios registrados pueden iniciar sesión en su cuenta.
- **Agendar Turnos**: Los usuarios pueden seleccionar una fecha y hora específica para agendar un turno.
- **Visualizar Turnos**: Permite a los usuarios ver una lista de sus turnos agendados.
- **Cancelar Turnos**: Los usuarios pueden cancelar un turno si no pueden asistir.

## Funcionalidades Futuras

- **Reprogramar Turnos**: Implementar la opción de reprogramar un turno existente.
- **Consultas Online**: Integrar la funcionalidad de realizar consultas médicas en línea.
- **Información Médica**: Añadir secciones o páginas con información sobre médicos, categorías médicas y otros recursos de salud.

## Tecnologías Utilizadas

### Frontend
- **React**
- **TypeScript**
- **Redux**: Para la gestión del estado.
- **SweetAlert2**
- **React-Icons**

### Backend
- **Node.js**
- **Express**
- **TypeORM**: Para interactuar con la base de datos PostgreSQL.
- **PostgreSQL**: Base de datos.
- **Moment.js**: Para el control de fechas.

## Instalación y Configuración

### Requisitos del Sistema

- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina local.

### Instrucciones de Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL del repositorio]
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd gadget
   ```
3. Instala las dependencias para el frontend:
   ```bash
   cd frontend
   npm install
   ```
4. Instala las dependencias para el backend:
   ```bash
   cd ../backend
   npm install
   ```

### Variables de Entorno

En la carpeta del proyecto backend, encontrarás el archivo `.env.example` con las indicaciones necesarias para configurar las variables de entorno. Renombra este archivo a `.env` y proporciona los valores requeridos.

## Uso

1. Inicia el servidor backend:
   ```bash
   cd backend
   npm start
   ```
2. Inicia el servidor frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```
3. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Contribución

Si deseas contribuir a **Gadget**, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Añade nueva característica'`).
4. Sube los cambios a tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Información Adicional

### Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

### Autores

- **Merlina Villecco**

### Contacto

- **LinkedIn:** [Merlina Villecco](https://www.linkedin.com/in/merlina-villecco-64149a214/)

---
