[⬅️ Volver al README principal](../README.md)

# 🛠️ Backend - Ringtomic API

Este es el backend de **Ringtomic**, una aplicación de reserva de pistas de baloncesto desarrollada con **Node.js** y **Express**.  
Se conecta a una base de datos **PostgreSQL** desplegada en **Render** y expone una API RESTful para gestionar usuarios, pistas y favoritos.

---

## 🧩 Estructura de la base de datos

La aplicación utiliza **3 tablas principales** alojadas en **PostgreSQL**:

- `Users`: para el registro y autenticación de usuarios.
- `Pitches`: contiene información sobre las pistas de baloncesto.
- `Favorites`: tabla intermedia que relaciona usuarios y pistas que han marcado como favoritas.

📸 **Diagrama E-R disponible en el README de la raíz del proyecto.**

---

## 📦 Rutas disponibles

- `/users`  
  Registro, login, gestión de perfil de usuario.

- `/pitches`  
  CRUD de pistas, búsqueda por ciudad, provincia o nombre.

- `/favorites`  
  CRUD completo para gestionar favoritos del usuario.

---

## ⚙️ Funcionalidades

- Registro y login de usuarios con JWT.
- Consulta de pistas disponibles.
- Filtro de pistas por ciudad, provincia o nombre.
- Gestión de pistas favoritas (añadir/editar nombre/reservar/eliminar).
- CRUD completo de pistas (crear, leer, actualizar, borrar).
- Rutas protegidas por autenticación.

---

## 🔐 Seguridad

- **JWT (JSON Web Tokens)** para autenticación segura.
- **Middleware de autenticación** para proteger rutas privadas.
- **bcrypt** para el hash de contraseñas.
- **cookie-parser** para la gestión de cookies.
- Uso de variables de entorno para configuraciones sensibles.

---

## 📚 Librerías utilizadas

- `express` – Framework principal del servidor
- `bcrypt` – Encriptación de contraseñas
- `jsonwebtoken` – Autenticación mediante tokens JWT
- `pg` – Cliente para PostgreSQL
- `dotenv` – Variables de entorno
- `cors` – Permitir peticiones entre dominios
- `path` – Utilidades de ruta en Node.js
- `cookie-parser` – Lectura de cookies

---

## 📖 Documentación de la API

Puedes explorar todos los endpoints disponibles con Swagger:

🔗 **Swagger UI**  
[https://ringtomic.onrender.com/api-swagger/](https://ringtomic.onrender.com/api-swagger/)

---

## 🚀 Despliegue

🔗 **Render (Backend):**  
[https://ringtomic.onrender.com/ready](https://ringtomic.onrender.com/ready)

> ⏳ El servidor en Render puede entrar en modo suspensión tras inactividad.  
> Esto significa que puede tardar unos segundos en responder al primer acceso.

---

## 📄 Documentación adicional

👉 Puedes consultar más detalles en el [README del frontend](../client/README.md)