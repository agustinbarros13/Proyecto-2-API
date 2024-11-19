

# Proyecto API REST con Express y MongoDB

Este proyecto consiste en una **API REST** desarrollada con **Node.js**, **Express** y **MongoDB** utilizando **Mongoose** como ODM (Object Data Modeling). El sistema gestiona usuarios, posts y comentarios, implementando roles de usuario (`admin` y `user`) con diferentes permisos. La autenticación se maneja mediante **JWT** (JSON Web Tokens) y las rutas están protegidas mediante middlewares.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración del Entorno](#configuración-del-entorno)
- [Ejecución](#ejecución)
- [Seed de la Base de Datos](#seed-de-la-base-de-datos)
- [Rutas y Endpoints](#rutas-y-endpoints)
  - [Usuarios](#usuarios)
  - [Posts](#posts)
  - [Comentarios](#comentarios)
- [Roles y Permisos](#roles-y-permisos)
- [Seguridad](#seguridad)
- [Licencia](#licencia)

## Descripción del Proyecto

Este proyecto tiene como objetivo crear una **API RESTful** que permita la gestión de usuarios, posts y comentarios. Los usuarios pueden registrarse, crear publicaciones y comentar en las publicaciones de otros. El proyecto está diseñado para demostrar cómo implementar un sistema de autenticación basado en **JWT**, roles de usuario y permisos en una aplicación de backend utilizando **Node.js** y **MongoDB**.

### Características Principales:

- **Autenticación JWT**: Los usuarios deben autenticarse para realizar la mayoría de las acciones (excepto el registro).
- **Roles de Usuario**: Hay dos roles (`user` y `admin`), donde los administradores tienen permisos adicionales.
- **CRUD**: Los usuarios pueden realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en posts y comentarios.
- **Protección de Rutas**: Las rutas están protegidas mediante middlewares de autenticación y autorización.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **Express**: Framework de Node.js para construir la API.
- **MongoDB**: Base de datos NoSQL para almacenar los datos.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JWT (JSON Web Token)**: Sistema de autenticación y autorización.
- **Bcrypt**: Para el cifrado de contraseñas.

## Requisitos Previos

- **Node.js** 
- **npm** 
- Cuenta de **MongoDB Atlas**
- Archivo `.env` 







