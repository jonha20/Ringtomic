const fs = require("fs");
const { Client } = require("pg");
require("dotenv").config();

// Configura tu conexión a PostgreSQL
const client = new Client({
  user: "neondb_owner",
  host: "ep-young-sun-a2lbp2ek-pooler.eu-central-1.aws.neon.tech",
  database: "neondb",
  password: "npg_SKjyXF67LwVC",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function importarPitches() {
  try {
    await client.connect();

    const data = fs.readFileSync(__dirname + "/pitch.json", "utf-8");
    const pitches = JSON.parse(data);

    for (const pitch of pitches) {
      const name = "Campo de baloncesto";
      const type = pitch.tags?.sport || "desconocido";
      const city = pitch.address?.city || "";
      const state = pitch.address?.province || "";
      const access = pitch.tags?.access === "private" ? "private" : "public";

      let lat = null;
      let lon = null;

      if (pitch.type === "node") {
        lat = pitch.lat;
        lon = pitch.lon;
      } else if (pitch.type === "way") {
        lat = pitch.center?.lat;
        lon = pitch.center?.lon;
      } else {
        console.log(`Tipo desconocido: ${pitch.type}, se omite`);
        continue;
      }

      if (!lat || !lon) {
        console.log(`No hay coordenadas para un pitch, se omite`);
        continue;
      }

      const query = `
        INSERT INTO Pitches (Name, City, State, Type, Reserved, Latitude, Longitude, Access)
        VALUES ($1, $2, $3, $4, FALSE, $5, $6, $7);
      `;

      await client.query(query, [name, city, state, type, lat, lon, access]);
    }

    console.log("✅ Importación completada con campo access");
  } catch (err) {
    console.error("❌ Error al importar:", err);
  } finally {
    await client.end();
  }
}

importarPitches();
