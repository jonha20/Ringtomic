[⬅️ Volver al README principal](../README.md)

# 🎯 Frontend - Ringtomic

Este es el frontend de **Ringtomic**, una web de reserva de pistas de baloncesto desarrollada con **React JS** y desplegada en Netlify.

---

## 🔥 Funcionalidades principales

- 🔐 **Login, registro y logout** con persistencia de sesión.
- 🗺️ **Vista principal** con canchas disponibles para reservar en el mapa (Leaflet).
- ➕ **Botón para añadir pistas a favoritos** desde el mapa.
- 🔍 **Buscador de canchas** por ciudad y provincia.
- 🍔 **Menú de navegación** + menú hamburguesa (burger-menu).
- 🙋‍♂️ **Vista de perfil** con tarjeta de usuario.
- ⭐ **Lista de canchas favoritas**.
- ➕ ➖ ✏️ **Botones de añadir, editar y eliminar favoritos**.
- 🔎 **Buscador de favoritos**.

---

## 🧰 Tecnologías y librerías utilizadas

- **React** – Biblioteca principal de la UI
- **Axios** – Peticiones HTTP
- **SASS** – Estilos personalizados
- **UUID** – Generación de IDs únicas
- **Debounce** – Optimización de inputs de búsqueda
- **burger-menu** – Menú de navegación responsive
- **leaflet** – Mapa interactivo de canchas
- **jwt-decode** – Decodificación del token JWT
- **toastify** – Notificaciones emergentes
- **sweetalert2** – Alertas visuales
- **js-cookie** – Manejo de cookies
- **vitest** – Tests del frontend

---

## 🧠 React Router y Hooks utilizados

### Hooks de React
- `useState`
- `useEffect`
- `useContext`

### React Router
- `useNavigate`
- `useLocation`
- `BrowserRouter`

---

## 🧪 Testing

El proyecto incluye **3 pruebas básicas** realizadas con `vitest`.

---

## 🌐 Despliegue

🔗 **Frontend (Netlify):**  
[https://ringtomic.netlify.app](https://ringtomic.netlify.app)

> ⏳ Al abrir la app, puede tardar unos segundos en cargar la información porque el backend (Render) entra en suspensión cuando no está en uso.

---

## 📄 Documentación adicional

👉 Puedes consultar más detalles en el [README del backend](../server/README.md)