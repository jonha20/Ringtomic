require('dotenv').config();
const axios = require('axios');
const { Client } = require('pg');

// Conexión a PostgreSQL
const db = new Client({
   user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
db.connect();
// API Key de Google
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// Obtener ciudad y provincia desde coordenadas usando Geocoding API
async function getCityAndProvince(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  try {
    const res = await axios.get(url);
    const components = res.data.results[0]?.address_components || [];

    let city = null;
    let province = null;

    for (const c of components) {
      if (c.types.includes('locality')) city = c.long_name;
      if (
        c.types.includes('administrative_area_level_2') ||
        c.types.includes('administrative_area_level_1')
      ) {
        province = c.long_name;
      }
    }

    return { city, province };
  } catch (err) {
    console.error('❌ Error obteniendo ciudad/provincia:', err.message);
    return { city: null, province: null };
  }
}

// Función principal para importar canchas desde Google Places API
async function fetchBasketballCourts() {
  const location = '40.4168,-3.7038'; // Coordenadas de Madrid
  const radius = 30000; // 30 km
  const keyword = 'basketball court';

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&keyword=${keyword}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const courts = response.data.results;

    for (const court of courts) {
      const { name, geometry, vicinity, photos } = court;
      const lat = geometry.location.lat;
      const lng = geometry.location.lng;

      // Ciudad y provincia
      const { city, province } = await getCityAndProvince(lat, lng);
      const address = vicinity || null;

      // Imagen
      let image_url = null;
      if (photos?.[0]) {
        image_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${GOOGLE_API_KEY}`;
      }

      // Detección básica de cancha privada
      const lowerName = name.toLowerCase();
      const isPrivate =
        lowerName.includes('colegio') ||
        lowerName.includes('instituto') ||
        lowerName.includes('club') ||
        lowerName.includes('polideportivo');

      const external_booking_url = isPrivate
        ? `https://www.google.com/search?q=reservar+${encodeURIComponent(name)}`
        : null;

      const description = 'Añadido automáticamente desde Google Places API';
      const created_by = null;

      await db.query(
        `
        INSERT INTO pitches (
          name, city, province, address,
          latitude, longitude, image_url,
          description, created_by,
          is_private, external_booking_url
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
        ON CONFLICT DO NOTHING
        `,
        [
          name,
          city,
          province,
          address,
          lat,
          lng,
          image_url,
          description,
          created_by,
          isPrivate,
          external_booking_url,
        ]
      );

      console.log(`✅ Añadida cancha: ${name} (${city}, ${province})`);
    }
  } catch (err) {
    console.error('❌ Error al importar canchas:', err.message);
  } finally {
    db.end();
  }
}
fetchBasketballCourts().catch(console.error);
