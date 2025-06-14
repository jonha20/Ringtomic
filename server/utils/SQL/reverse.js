const { Client } = require("pg");
require("dotenv").config({ path: "../.env" });
// Tu JSON de Overpass
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

const datos = [
  {
    type: "node",
    id: 110616292,
    lat: 39.4516284,
    lon: -0.3660735,
    tags: {
      leisure: "sports_centre",
      name: "Pavelló Font de Sant Lluís",
      "name:ca": "Pavelló Font de Sant Lluís",
      "name:es": "Pabellón Fuente de San Luís",
      sport: "basketball",
      wikidata: "Q974010",
      wikipedia: "ca:Pavelló Font de Sant Lluís",
    },
  },
  {
    type: "node",
    id: 546656381,
    lat: 43.2169283,
    lon: -2.7329672,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 783955786,
    lat: 41.9788879,
    lon: 2.8149256,
    tags: {
      leisure: "pitch",
      name: "Parc Central",
      "name:ca": "Parc Central",
      source: "Ajuntament de Girona",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 795714349,
    lat: 39.5099203,
    lon: 2.754842,
    tags: {
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1024856806,
    lat: 41.6887815,
    lon: 2.2814757,
    tags: {
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1177579332,
    lat: 40.0691014,
    lon: -2.1403806,
    tags: {
      leisure: "playground",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1183590333,
    lat: 40.071307,
    lon: -2.1514904,
    tags: {
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1194529964,
    lat: 40.0630567,
    lon: -2.122226,
    tags: {
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1194531669,
    lat: 40.0623739,
    lon: -2.1232195,
    tags: {
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1226402608,
    lat: 37.9764244,
    lon: -0.6922573,
    tags: {
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1926884576,
    lat: 37.4186205,
    lon: -5.9613334,
    tags: {
      source: "survey",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 1999526179,
    lat: 41.7348891,
    lon: 1.5203818,
    tags: {
      leisure: "sports_centre",
      name: "Poliesportiu Municipal",
      "name:ca": "Poliesportiu Municipal",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 2024414979,
    lat: 43.4840773,
    lon: -8.2243386,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 2340903278,
    lat: 39.2692785,
    lon: -2.6176105,
    tags: {
      building: "public",
      leisure: "sports_centre",
      name: "Pabellón Barrio Socuéllamos",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 3009720147,
    lat: 40.9375194,
    lon: -3.2356187,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 3099046563,
    lat: 42.1919619,
    lon: 2.1954968,
    tags: {
      building: "public",
      leisure: "sports_centre",
      name: "Poliesportiu Municipal de Ripoll",
      "name:ca": "Poliesportiu Municipal de Ripoll",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 3648764461,
    lat: 36.7366951,
    lon: -3.9732258,
    tags: {
      hoops: "4",
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "node",
    id: 3707555447,
    lat: 42.2066505,
    lon: 2.20125,
    tags: {
      "addr:city": "Ripoll",
      "addr:housename": "L'Avellaneda centre de Tecnificació Esportiva",
      "addr:postcode": "17500",
      "addr:street": "Ronda Mas de'n Bosch",
      building: "public",
      designation: "Training and tecnichal sports center",
      leisure: "sports_centre",
      name: "L'Avellaneda Centre de Tecnificació Esportiva del Ripollès",
      "name:ca": "L'Avellaneda Centre de Tecnificació Esportiva del Ripollès",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 3883857432,
    lat: 41.3966684,
    lon: 2.2095131,
    tags: {
      access: "yes",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 3905206566,
    lat: 41.5574145,
    lon: 2.0034003,
    tags: {
      leisure: "pitch",
      name: "Sferic",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 3964762918,
    lat: 42.0403104,
    lon: 2.9140098,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 4371643984,
    lat: 41.3825969,
    lon: 2.1549041,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 4713738302,
    lat: 41.9757743,
    lon: 2.8015159,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 4721036061,
    lat: 42.6871719,
    lon: -2.9357851,
    tags: {
      name: "CDB Cronos",
      office: "yes",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 4793466595,
    lat: 41.4862634,
    lon: 2.1808704,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 4793559325,
    lat: 41.5555255,
    lon: 1.9530809,
    tags: {
      leisure: "sports_centre",
      name: "Pavelló de Viladecavalls",
      "name:ca": "Pavelló de Viladecavalls",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 4946965981,
    lat: 42.3620284,
    lon: -2.4768888,
    tags: {
      building: "public",
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5015823478,
    lat: 41.7247245,
    lon: 2.9295936,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5075558956,
    lat: 42.8586929,
    lon: -8.6576222,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5268497314,
    lat: 39.6649999,
    lon: -0.3414474,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5320638715,
    lat: 38.5108253,
    lon: -0.2204492,
    tags: {
      description: "Monumento cancha de monibasquet con pérgola decorativa",
      leisure: "pitch",
      name: "Cancha de minibasket",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5419781245,
    lat: 37.2189127,
    lon: -3.6904773,
    tags: {
      "addr:city": "Atarfe",
      "addr:housenumber": "71",
      "addr:postcode": "18230",
      "addr:street": "Avenida de la Diputación",
      club: "sport",
      email: "info@cabatarfe.es",
      name: "Club Amigos del Baloncesto",
      phone: "+34 661 44 12 90",
      short_name: "CAB Atarfe",
      sport: "basketball",
      website: "https://www.cabatarfe.es",
    },
  },
  {
    type: "node",
    id: 5421051050,
    lat: 41.6753898,
    lon: 1.8408915,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5484267566,
    lat: 43.3479015,
    lon: -8.4123762,
    tags: {
      access: "yes",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5640227465,
    lat: 40.635591,
    lon: -3.2296261,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 5732907869,
    lat: 41.5093711,
    lon: -0.6290915,
    tags: {
      leisure: "pitch",
      name: "Basketball Court CEIP Luis Garcia Sainz",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "node",
    id: 5732907870,
    lat: 41.5091713,
    lon: -0.6289735,
    tags: {
      leisure: "pitch",
      name: "Basketball Court CEIP Luis Garcia Sainz",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "node",
    id: 5758770440,
    lat: 41.5340123,
    lon: 1.7734749,
    tags: {
      access: "yes",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6221446991,
    lat: 43.4596179,
    lon: -8.2535753,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6239006978,
    lat: 41.341463,
    lon: 2.0478319,
    tags: {
      leisure: "sport",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6302235185,
    lat: 36.8485261,
    lon: -2.3068553,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6379494873,
    lat: 41.6681736,
    lon: -0.8334042,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6382823361,
    lat: 42.457785,
    lon: -6.04988,
    tags: {
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6593914111,
    lat: 41.6306884,
    lon: 2.1730143,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
      surface: "dirt",
    },
  },
  {
    type: "node",
    id: 6655846854,
    lat: 41.6824791,
    lon: 2.1622026,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
      surface: "paving_stones",
    },
  },
  {
    type: "node",
    id: 6739573897,
    lat: 41.3636819,
    lon: 2.1150562,
    tags: {
      leisure: "sports_centre",
      name: "Club Esportiu Alhenya",
      "name:ca": "Club Esportiu Alhenya",
      "source:name":
        "https://www.l-h.cat/directori/detallEquipament.aspx?1I3O9NjSdTP7JtbeF5qazAnZb8oIuKjNCYuw",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 6857429593,
    lat: 43.399505,
    lon: -3.4040615,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7085965018,
    lat: 37.3838155,
    lon: -2.1396602,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7191545560,
    lat: 41.8509014,
    lon: -1.927315,
    tags: {
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7262852411,
    lat: 37.385321,
    lon: -6.0040953,
    tags: {
      "addr:city": "Sevilla",
      "addr:housenumber": "13",
      "addr:postcode": "41010",
      "addr:street": "Calle San Jorge",
      "contact:phone": "+34 635 07 03 59",
      "contact:website": "https://baskettotalstore.com/",
      name: "Basket Total Store Triana",
      shop: "sports",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7282290886,
    lat: 37.573804,
    lon: -6.7494293,
    tags: {
      leisure: "pitch",
      name: "Pabellón Triana",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7296670277,
    lat: 41.2394804,
    lon: 1.8024441,
    tags: {
      leisure: "pitch",
      source: "gps;local knowledge",
      sport: "basketball",
      surface: "ground",
    },
  },
  {
    type: "node",
    id: 7352333725,
    lat: 41.5478291,
    lon: 2.09262,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7623796454,
    lat: 41.384854,
    lon: 2.1344043,
    tags: {
      access: "yes",
      "addr:city": "Barcelona",
      "addr:postcode": "08029",
      "addr:street": "Can Bruixa",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      name: "Canastas Infantas",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 7798631877,
    lat: 39.5947727,
    lon: -3.0448601,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7834832611,
    lat: 40.3586636,
    lon: -3.2575784,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 7960974059,
    lat: 43.367769,
    lon: -8.4216227,
    tags: {
      club: "sport",
      name: "Basquet Coruña",
      sport: "basketball",
      website: "https://www.basquetcoruna.com/gl/",
    },
  },
  {
    type: "node",
    id: 8026439882,
    lat: 43.2027291,
    lon: -8.2858512,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 8205188022,
    lat: 39.7179612,
    lon: 2.9135925,
    tags: {
      access: "permit",
      hoops: "6",
      leisure: "pitch",
      lit: "yes",
      name: "Sant Francesc Llops Bàsquet Inca",
      "name:ca": "Sant Francesc Llops Bàsquet Inca",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 8224466734,
    lat: 42.1046887,
    lon: 2.7807681,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 8261599815,
    lat: 41.4950749,
    lon: 2.1743871,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 8437730456,
    lat: 43.254572,
    lon: -2.9068308,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 8671283288,
    lat: 41.3852344,
    lon: 2.1348639,
    tags: {
      access: "customers",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      name: "CEM LES CORTS",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 8761099922,
    lat: 28.317066,
    lon: -16.4055635,
    tags: {
      leisure: "sports_centre",
      name: "Terrain Quique Ruiz",
      "name:es": "Pabellon Quique Ruiz",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 8887734194,
    lat: 28.470004,
    lon: -16.2663565,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 8897659373,
    lat: 42.1754955,
    lon: 2.5292073,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9031375900,
    lat: 39.6012565,
    lon: 3.3817667,
    tags: {
      hoops: "3",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 9079421336,
    lat: 39.3196795,
    lon: 3.130886,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9229856548,
    lat: 42.6325595,
    lon: -5.5860866,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9243432373,
    lat: 43.3209342,
    lon: -1.8963564,
    tags: {
      leisure: "pitch",
      name: "3x311GARA",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9285753297,
    lat: 43.3208949,
    lon: -1.9535219,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9487099140,
    lat: 41.491269,
    lon: 2.3676985,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9497960929,
    lat: 40.3829606,
    lon: -3.2642063,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9662711921,
    lat: 41.6775165,
    lon: 2.4837146,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9703916038,
    lat: 43.0231366,
    lon: -7.6007452,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9804434488,
    lat: 42.0299436,
    lon: -3.5082875,
    tags: {
      access: "yes",
      covered: "no",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 9835337181,
    lat: 41.8204282,
    lon: -1.6926609,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9865505480,
    lat: 41.413423,
    lon: 2.1504007,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9867507617,
    lat: 41.3870958,
    lon: 2.1870437,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9867870281,
    lat: 41.3871385,
    lon: 2.1871372,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9882631019,
    lat: 41.5897582,
    lon: 2.5774336,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9963611624,
    lat: 40.4172152,
    lon: -3.5554112,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9970592035,
    lat: 42.0116993,
    lon: -6.0427355,
    tags: {
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 9981231517,
    lat: 41.3760884,
    lon: 2.1610805,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10034068650,
    lat: 43.3329705,
    lon: -2.9898123,
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 10167787563,
    lat: 38.6694229,
    lon: -4.1789674,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10167787564,
    lat: 38.6695555,
    lon: -4.1791237,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10196591127,
    lat: 37.1539129,
    lon: -3.5953024,
    tags: {
      "addr:street": "Avenida Salvador Allende",
      club: "sport",
      name: "Fundación Club de Baloncesto Granada",
      nohousenumber: "yes",
      opening_hours: "Mo-Fr 09:00-14:00",
      phone: "+34 958 17 64 89",
      sport: "basketball",
      website: "https://fundacioncbgranada.es",
    },
  },
  {
    type: "node",
    id: 10268140419,
    lat: 41.5103921,
    lon: -4.6903488,
    tags: {
      access: "yes",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10268140420,
    lat: 41.5112463,
    lon: -4.6816238,
    tags: {
      access: "yes",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10312159318,
    lat: 41.2185584,
    lon: 1.734826,
    tags: {
      "addr:door": "3",
      "addr:floor": "0",
      "addr:housenumber": "33",
      "addr:street": "Carrer de l'Àncora",
      leisure: "sports_centre",
      name: "Centre de tecnificació de bàsquet",
      "name:ca": "Centre de tecnificació de bàsquet",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10579991474,
    lat: 41.3878956,
    lon: 1.5726392,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10611965399,
    lat: 42.7976966,
    lon: -4.0103811,
    tags: {
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10612891207,
    lat: 41.564552,
    lon: 2.5118223,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10647020056,
    lat: 41.440042,
    lon: 2.2146031,
    tags: {
      fixme:
        "Aquest element s'ha afegit amb MapComplete, cal millorar la geometria",
      hoops: "1",
      lit: "No per practicar esport",
      panoramax: "d478dc8f-2628-4507-aef2-3c6785ec8490",
      sport: "basketball",
      surface: "concrete",
      "surface:condition": "maintained",
    },
  },
  {
    type: "node",
    id: 10660848643,
    lat: 41.4555127,
    lon: 2.2391188,
    tags: {
      access: "yes",
      description:
        "Són dues cistelles, per tant ideal per a un 21 però no per un partit.",
      fixme:
        "Aquest element s'ha afegit amb MapComplete, cal millorar la geometria",
      hoops: "1",
      leisure: "pitch",
      "lines:basketball": "no",
      lit: "no",
      opening_hours: "24/7",
      operator: "Municipal",
      panoramax: "27b674a5-9015-49d9-b8e5-de4ae68ce59f",
      "panoramax:0": "098f53f9-6214-4c1a-9c82-657f53d3d515",
      sport: "basketball",
      surface: "concrete",
      "surface:condition": "maintained",
    },
  },
  {
    type: "node",
    id: 10665161068,
    lat: 41.4459594,
    lon: 2.2454193,
    tags: {
      access: "private",
      description:
        "Pista del Sampep tancada per l'Ajuntament de Badalona i en perill de desaparèixer per la demanda de desnonament que ha presentat l'Església contra el Club.",
      fixme:
        "Aquest element s'ha afegit amb MapComplete, cal millorar la geometria",
      hoops: "Dues",
      leisure: "pitch",
      "lines:basketball": "yes",
      lit: "yes",
      operator: "CB Sant Josep de Badalona",
      panoramax: "9d56df42-7be5-4abd-81fe-207e342af1b7",
      sport: "basketball",
      surface: "parquet",
      "surface:condition": "maintained",
    },
  },
  {
    type: "node",
    id: 10695606211,
    lat: 41.4607291,
    lon: 2.2457707,
    tags: {
      description:
        "Espai en baixada i amb una cistella inservible, pràcticament.",
      fixme:
        "Aquest element s'ha afegit amb MapComplete, cal millorar la geometria",
      hoops: "Té una cistella pràcticament inservible i a tocar del sostre",
      leisure: "pitch",
      "lines:basketball": "no",
      lit: "no",
      opening_hours: "24/7",
      operator: "pública",
      sport: "basketball",
      surface: "concrete",
      "surface:condition": "uneven",
    },
  },
  {
    type: "node",
    id: 10743723577,
    lat: 41.3522644,
    lon: 2.0699221,
    tags: {
      "addr:city": "Cornellà de Llobregat",
      "addr:housenumber": "133",
      "addr:postcode": "08940",
      "addr:street": "Carrer Marquès de Cornellà",
      leisure: "sports_centre",
      name: "Pabelló central",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10822117344,
    lat: 41.5201578,
    lon: 1.9038587,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10822117350,
    lat: 41.521939,
    lon: 1.9014394,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10876378571,
    lat: 41.5681565,
    lon: 2.5145228,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 10984653878,
    lat: 43.1850763,
    lon: -7.7380845,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11006282863,
    lat: 41.5473307,
    lon: 2.118575,
    tags: {
      hoops: "1",
      leisure: "pitch",
      lit: "yes",
      name: "Pista de bàsquet",
      "name:ca": "Pista de bàsquet",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "node",
    id: 11029913302,
    lat: 36.5533002,
    lon: -4.6264229,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11183317582,
    lat: 42.6170338,
    lon: -5.5660482,
    tags: {
      hoops: "3",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11183317583,
    lat: 42.6169597,
    lon: -5.565909,
    tags: {
      hoops: "3",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11267563914,
    lat: 36.7663729,
    lon: -3.4558322,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11303123928,
    lat: 41.3503063,
    lon: 2.1386221,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11341577484,
    lat: 36.1597048,
    lon: -5.3423065,
    tags: {
      "addr:city": "La Línea de la Concepción",
      "addr:postcode": "11300",
      "addr:street": "Avenida del Ejército",
      club: "sport",
      name: "Unión Linense de Baloncesto",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11365969446,
    lat: 41.4310279,
    lon: 2.237893,
    tags: {
      access: "yes",
      fixme:
        "Aquest element s'ha afegit amb MapComplete, cal millorar la geometria",
      hoops: "1",
      leisure: "pitch",
      "lines:basketball": "no",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11397667044,
    lat: 38.7746414,
    lon: 0.1894244,
    tags: {
      access: "yes",
      hoops: "3",
      leisure: "pitch",
      sport: "basketball",
      surface: "sand",
      "survey:date": "2023-12-06",
    },
  },
  {
    type: "node",
    id: 11506189328,
    lat: 41.7125004,
    lon: -1.003274,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11530255297,
    lat: 41.4044235,
    lon: 2.1872006,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11573365110,
    lat: 43.3698695,
    lon: -5.8464627,
    tags: {
      "addr:city": "Oviedo / Uviéu",
      "addr:postcode": "33011",
      "addr:street": "Calle Palmira Villa González-Río",
      name: "Tienda Oficial Oviedo Baloncesto",
      shop: "sports",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11634361286,
    lat: 36.8502155,
    lon: -2.4336997,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11649124668,
    lat: 39.0032714,
    lon: -0.1610812,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11649124669,
    lat: 39.0031749,
    lon: -0.1611739,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11649124671,
    lat: 39.0008269,
    lon: -0.1591964,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11653496950,
    lat: 28.1607795,
    lon: -16.6431862,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11670175293,
    lat: 29.1167816,
    lon: -13.6400348,
    tags: {
      access: "yes",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "node",
    id: 11747808277,
    lat: 39.6486257,
    lon: 2.7780204,
    tags: {
      access: "yes",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
      surface: "paving_stones",
    },
  },
  {
    type: "node",
    id: 11750634959,
    lat: 42.8445023,
    lon: -8.9101891,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11774442822,
    lat: 42.8785414,
    lon: -8.5469078,
    tags: {
      alt_name: "Beirasar Rosalía",
      club: "sport",
      name: "Club Baloncesto Rosalía de Castro",
      sport: "basketball",
      wikidata: "Q3325015",
      wikipedia: "gl:Club Baloncesto Rosalía de Castro",
    },
  },
  {
    type: "node",
    id: 11775033660,
    lat: 41.9408811,
    lon: 3.1996407,
    tags: {
      access: "customers",
      hoops: "1",
      leisure: "pitch",
      sport: "basketball",
      "survey:date": "2024-03-31",
    },
  },
  {
    type: "node",
    id: 11775597372,
    lat: 42.8761414,
    lon: -8.5305131,
    tags: {
      alt_name: "Monbus Obradoiro",
      club: "sport",
      name: "Obradoiro Clube de Amigos do Baloncesto, S.A.D.",
      short_name: "Obradoiro CAB",
      sport: "basketball",
      wikidata: "Q9647464",
      wikipedia: "gl:Obradoiro Club de Amigos do Baloncesto",
    },
  },
  {
    type: "node",
    id: 11840698133,
    lat: 28.4624314,
    lon: -16.2559732,
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "parquet",
    },
  },
  {
    type: "node",
    id: 11840698134,
    lat: 28.488788,
    lon: -16.237796,
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 11851227847,
    lat: 41.1507409,
    lon: 1.1024569,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11876945419,
    lat: 38.8968041,
    lon: -6.6193121,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 11879033902,
    lat: 41.8849169,
    lon: 2.8737053,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12009265857,
    lat: 42.0386145,
    lon: -6.6678388,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12036330506,
    lat: 38.6959618,
    lon: -0.4898856,
    tags: {
      access: "yes",
      hoops: "1",
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 12097482500,
    lat: 38.9729674,
    lon: 1.3314284,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12121970626,
    lat: 42.9229017,
    lon: -2.0217795,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12143072425,
    lat: 42.719542,
    lon: -6.925111,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12186495608,
    lat: 42.2786023,
    lon: -7.9527496,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12293431120,
    lat: 36.7772676,
    lon: -2.5996895,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12337566475,
    lat: 36.6983411,
    lon: -6.4095744,
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      reservation: "no",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12337620125,
    lat: 36.6967669,
    lon: -6.421735,
    tags: {
      access: "yes",
      leisure: "pitch",
      reservation: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 12337620126,
    lat: 36.6968892,
    lon: -6.4212929,
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      reservation: "no",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12370680729,
    lat: 29.1469401,
    lon: -13.4995308,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12408911478,
    lat: 42.8258003,
    lon: -1.6503528,
    tags: {
      access: "yes",
      leisure: "pitch",
      name: "Saskibaloi kantxa",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 12408911479,
    lat: 42.8256354,
    lon: -1.6502966,
    tags: {
      access: "yes",
      leisure: "pitch",
      name: "Saskibaloi kantxa",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "node",
    id: 12441929179,
    lat: 41.284116,
    lon: 1.2464899,
    tags: {
      "addr:city": "Valls",
      "addr:housenumber": "35",
      "addr:postcode": "43800",
      "addr:street": "Muralla de Sant Antoni",
      club: "sport",
      name: "Associació Esportiva Secció de Bàsquet de l'Associació d'Alumnes i Exalumnes de l'Escola del Treball (AAEET)",
      phone: "+34 977 61 34 43",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12441929442,
    lat: 41.2880507,
    lon: 1.2586694,
    tags: {
      "addr:city": "Valls",
      "addr:place": "Pavelló Municipal Joana Ballart",
      "addr:postcode": "43800",
      "addr:street": "Carrer del Vilar",
      club: "sport",
      "contact:facebook":
        "https://www.facebook.com/clubbasquetvalls/?pnref=story",
      "contact:instagram": "https://www.instagram.com/c.b.valls/",
      "contact:twitter": "http://www.twitter.com/cbvalls",
      email: "cbvalls@cbvalls.com",
      name: "Club Bàsquet Valls",
      nohousenumber: "yes",
      phone: "+34 977 600 010",
      sport: "basketball",
      website: "https://www.cbvalls.com/",
    },
  },
  {
    type: "node",
    id: 12535612305,
    lat: 41.6489386,
    lon: 2.7381369,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12558884918,
    lat: 40.5834487,
    lon: -3.995438,
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "node",
    id: 12749910006,
    lat: 43.3107249,
    lon: -3.0216448,
    tags: {
      arcade_game: "sport",
      leisure: "arcade_machine",
      level: "2",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4162335,
    center: {
      lat: 40.4050292,
      lon: -3.8335234,
    },
    nodes: [22655450, 22655441, 22655430, 22655420, 22655450],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4291310,
    center: {
      lat: 40.4254624,
      lon: -3.6998744,
    },
    nodes: [25906314, 25906315, 25906311, 25906313, 25906314],
    tags: {
      created_by: "JOSM",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
      wheelchair: "yes",
    },
  },
  {
    type: "way",
    id: 4392428,
    center: {
      lat: 42.9065479,
      lon: -2.065857,
    },
    nodes: [26835584, 26835580, 26835582, 26835583, 26835584],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4879592,
    center: {
      lat: 40.4711736,
      lon: -3.7047476,
    },
    nodes: [31553129, 31553130, 31553127, 31553128, 31553129],
    tags: {
      access: "yes",
      barrier: "fence",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 4879954,
    center: {
      lat: 40.4783787,
      lon: -3.693944,
    },
    nodes: [31558726, 31558723, 31558724, 31558725, 31558726],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4879955,
    center: {
      lat: 40.4783583,
      lon: -3.6937225,
    },
    nodes: [31558763, 31558760, 31558761, 31558762, 31558763],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4917268,
    center: {
      lat: 40.469809,
      lon: -3.7116854,
    },
    nodes: [32201213, 32201210, 32201211, 32201258, 32201213],
    tags: {
      barrier: "fence",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4917269,
    center: {
      lat: 40.469456,
      lon: -3.7115893,
    },
    nodes: [32201270, 32201230, 32201231, 32201271, 32201270],
    tags: {
      barrier: "fence",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4917271,
    center: {
      lat: 40.4698505,
      lon: -3.7114815,
    },
    nodes: [32201260, 32201213, 32201258, 32201259, 32201260],
    tags: {
      barrier: "fence",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 4917497,
    center: {
      lat: 40.4745709,
      lon: -3.7077346,
    },
    nodes: [32206075, 32206072, 32206073, 32206074, 32206075],
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 6181906,
    center: {
      lat: 40.4668125,
      lon: -3.7112109,
    },
    nodes: [51397044, 51397047, 51397048, 51397051, 51397044],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 6181911,
    center: {
      lat: 40.4679885,
      lon: -3.7120254,
    },
    nodes: [51397117, 51397118, 51397119, 51397121, 51397117],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 10862352,
    center: {
      lat: 43.3614391,
      lon: -5.8654895,
    },
    nodes: [493385558, 493385561, 493385564, 493386367, 493385558],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 12211933,
    center: {
      lat: 39.4517975,
      lon: -0.3658748,
    },
    nodes: [
      110615855, 110615862, 110615871, 110615882, 110615886, 110615890,
      110615892, 10773605013, 110615900, 10773605014, 110615920, 3234272107,
      110615927, 110615935, 110615936, 110615954, 3234272108, 110615963,
      110615980, 110615972, 10773535130, 10773649379, 110615995, 10773649383,
      10773605015, 110615985, 10773649389, 110616012, 110616004, 110616030,
      10773605009, 10773605010, 3234272110, 3234272109, 10773605011,
      10773605012, 110616020, 110616051, 110616041, 110616069, 110616062,
      110616078, 110616109, 110616097, 10773605017, 10773605016, 10773605018,
      110616132, 110616138, 10773605020, 10773605019, 10773605021, 110615855,
    ],
    tags: {
      alt_name: "Pavelló de La Fonteta",
      building: "yes",
      "building:levels": "4",
      "capacity:persons": "9000",
      leisure: "stadium",
      name: "Poliesportiu Font de Sant Lluís",
      "name:ca": "Poliesportiu Font de Sant Lluís",
      "name:es": "Polideportivo Fuente de San Luis",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 14349474,
    center: {
      lat: 39.4832241,
      lon: -0.3736562,
    },
    nodes: [139246875, 139246879, 139246880, 139246883, 139246875],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 15808330,
    center: {
      lat: 40.4238516,
      lon: -3.6718083,
    },
    nodes: [
      158849465, 2262030119, 2262030133, 2262030135, 2262030145, 2262030148,
      2262030177, 2262030208, 2262030226, 2554720737, 2262030240, 2262030245,
      2262030247, 2262030248, 2262030249, 2716754205, 2716754192, 2716754193,
      2716754207, 2716754208, 2716754209, 5183620407, 5183620408, 2716754199,
      2716754198, 2716754194, 2716754197, 2716754196, 158849466, 158849467,
      2262030254, 2262030253, 2262030252, 2262030251, 2262030250, 2262030246,
      2262030242, 6214502301, 2262030238, 6214502302, 2262030230, 2262030216,
      6214502300, 6214502303, 158849468, 158849465,
    ],
    tags: {
      "addr:city": "Madrid",
      alt_name: "Palacio de los Deportes",
      building: "stadium",
      "capacity:persons": "17453",
      leisure: "stadium",
      name: "Movistar Arena",
      sport: "basketball",
      website: "https://www.movistararena.es",
      wikidata: "Q539019",
      wikipedia: "es:Palacio de Deportes de la Comunidad de Madrid",
    },
  },
  {
    type: "way",
    id: 16190263,
    center: {
      lat: 39.4743406,
      lon: -0.3822305,
    },
    nodes: [164123196, 164123202, 164123203, 164123205, 164123196],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 19796931,
    center: {
      lat: 39.488707,
      lon: -0.3833026,
    },
    nodes: [206275844, 206275846, 11708661030, 206275833, 206275844],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 21021583,
    center: {
      lat: 43.4006367,
      lon: -3.6678253,
    },
    nodes: [225965330, 225965342, 225965351, 225965367, 225965330],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 21855275,
    center: {
      lat: 38.3887627,
      lon: -0.5143975,
    },
    nodes: [235535541, 235535549, 235535554, 235535560, 235535541],
    tags: {
      leisure: "pitch",
      source: "field_work",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 22822486,
    center: {
      lat: 38.3609303,
      lon: -0.463305,
    },
    nodes: [245568509, 245568510, 245568511, 245568512, 245568509],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23295368,
    center: {
      lat: 40.4789275,
      lon: -3.6500178,
    },
    nodes: [252155637, 252155638, 254994543, 252155639, 252155640, 252155637],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23437706,
    center: {
      lat: 39.4539211,
      lon: -0.3646371,
    },
    nodes: [253823392, 253823393, 253823394, 253823395, 253823392],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23499903,
    center: {
      lat: 40.4948488,
      lon: -3.7115151,
    },
    nodes: [254497608, 254497609, 254497610, 254497611, 254497608],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23499906,
    center: {
      lat: 40.4941823,
      lon: -3.712459,
    },
    nodes: [254497641, 254497642, 254497643, 254497644, 254497641],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23555415,
    center: {
      lat: 40.4725799,
      lon: -3.5857481,
    },
    nodes: [255073229, 255073231, 255073233, 255073234, 255073229],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23557395,
    center: {
      lat: 39.4740727,
      lon: -0.3987117,
    },
    nodes: [
      255099407, 255099408, 6400522014, 6400522015, 255099409, 255099418,
      6400522008, 255099411, 255099407,
    ],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 23575218,
    center: {
      lat: 39.4508096,
      lon: -0.3649438,
    },
    nodes: [
      255303835, 10773533496, 10891346485, 10773533494, 255303836, 10773600490,
      10773600504, 10773600501, 4392610621, 10773600500, 10773600497,
      10773600496, 10773605005, 255303837, 10773605006, 10773600494, 255303835,
    ],
    tags: {
      leisure: "sports_centre",
      name: "L'Alqueria del Basket",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23704523,
    center: {
      lat: 43.3420088,
      lon: -5.8700582,
    },
    nodes: [256673540, 256673539, 256673537, 256673538, 256673540],
    tags: {
      created_by: "JOSM",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23704524,
    center: {
      lat: 43.3418317,
      lon: -5.8696717,
    },
    nodes: [256673541, 256673544, 256673542, 256673543, 256673541],
    tags: {
      created_by: "JOSM",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23733022,
    center: {
      lat: 42.8381042,
      lon: -1.6775102,
    },
    nodes: [257032101, 257032109, 257032110, 257032111, 257032101],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 23741365,
    center: {
      lat: 42.8172851,
      lon: -1.6648054,
    },
    nodes: [257125141, 257125144, 257125146, 257125151, 257125141],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 23784127,
    center: {
      lat: 40.5435743,
      lon: -3.6500853,
    },
    nodes: [257702151, 257702152, 257702153, 257702154, 257702151],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 24289816,
    center: {
      lat: 38.3758368,
      lon: -0.4946267,
    },
    nodes: [263013986, 263013988, 263013991, 263013994, 263013986],
    tags: {
      access: "private",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 24289817,
    center: {
      lat: 38.3757729,
      lon: -0.4950447,
    },
    nodes: [263013999, 263014002, 263014004, 263014008, 263013999],
    tags: {
      access: "private",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 24577798,
    center: {
      lat: 41.6830471,
      lon: -0.8907783,
    },
    nodes: [267200775, 267200778, 267200779, 267200777, 267200775],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 24577800,
    center: {
      lat: 41.6826626,
      lon: -0.8907896,
    },
    nodes: [267200794, 267200792, 267200793, 267200791, 267200794],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 24736328,
    center: {
      lat: 40.0509104,
      lon: 0.0571898,
    },
    nodes: [268839584, 268839586, 268839587, 268839588, 268839584],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 25134358,
    center: {
      lat: 40.8601257,
      lon: -4.5524449,
    },
    nodes: [273854376, 273854382, 273854389, 273854395, 273854422, 273854376],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 25156352,
    center: {
      lat: 40.4066165,
      lon: -3.8929276,
    },
    nodes: [274237738, 274237739, 274237740, 274237741, 274237738],
    tags: {
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 25724268,
    center: {
      lat: 43.4063209,
      lon: -8.1673606,
    },
    nodes: [280500067, 280500181, 280500069, 280500182, 280500067],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 25875693,
    center: {
      lat: 43.4651752,
      lon: -3.8124212,
    },
    nodes: [282251807, 7444312419, 282251808, 282251809, 282251810, 282251807],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 25984659,
    center: {
      lat: 40.3873524,
      lon: -3.7541849,
    },
    nodes: [283471639, 283471640, 283471641, 283471642, 283471639],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 25984661,
    center: {
      lat: 40.3861103,
      lon: -3.7524403,
    },
    nodes: [283471656, 283471662, 283471669, 283471699, 283471656],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 26117014,
    center: {
      lat: 40.4683642,
      lon: -3.6589007,
    },
    nodes: [285909881, 285909882, 285909883, 285909884, 285909881],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 26138146,
    center: {
      lat: 40.4797848,
      lon: -3.6612629,
    },
    nodes: [286215477, 286215478, 286215479, 286215480, 286215477],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 26335510,
    center: {
      lat: 41.3053388,
      lon: 1.9968519,
    },
    nodes: [288526912, 288526913, 288526908, 288526909, 288526912],
    tags: {
      created_by: "Potlatch 0.10b",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 26360456,
    center: {
      lat: 42.0101727,
      lon: -5.6783113,
    },
    nodes: [
      288806077, 3878467281, 288806091, 3878467278, 288806096, 3878467279,
      288806100, 3878467280, 288806077,
    ],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 26645612,
    center: {
      lat: 40.6398571,
      lon: -4.1580768,
    },
    nodes: [292267341, 292267344, 292267348, 292267352, 292267341],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 26664185,
    center: {
      lat: 37.3714704,
      lon: -6.0449946,
    },
    nodes: [292456811, 292456815, 292456816, 292456814, 292456811],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 26973607,
    center: {
      lat: 43.297652,
      lon: -1.968703,
    },
    nodes: [
      767920619, 295586799, 295586800, 295586801, 295586802, 295586803,
      295586804, 2678582521, 295586805, 295586806, 295586807, 295586808,
      295586809, 295586810, 295586811, 295586812, 295586813, 295586814,
      295586815, 295586816, 295586817, 295586818, 295586819, 295586820,
      295586821, 295586822, 295586823, 295586824, 295586826, 767920619,
    ],
    tags: {
      "addr:city": "Donostia/San Sebastián",
      "addr:country": "ES",
      "addr:housenumber": "2",
      "addr:postcode": "20014",
      "addr:street": "Miramon pasealekua",
      "b5m:id": "D_238205",
      "b5m:url": "http://b5m.gipuzkoa.net/b5map/r1/eu/mapa/lekutu/D_238205",
      "b5m:urlOrto":
        "http://b5m.gipuzkoa.net/url5000/index.php?id=D_238205&lengua=1&actu=0&categoria=VITO_FOTO",
      building: "yes",
      "capacity:persons": "11000",
      leisure: "stadium",
      name: "Illunbeko zezen plaza",
      "name:es": "Plaza de Toros de Illumbe",
      "name:eu": "Illunbeko zezen plaza",
      "roof:shape": "dome",
      source: "b5m",
      sport: "basketball",
      wheelchair: "yes",
      wikidata: "Q3324721",
    },
  },
  {
    type: "way",
    id: 27017428,
    center: {
      lat: 40.4071086,
      lon: -3.8812036,
    },
    nodes: [296146576, 296146577, 296146578, 296146579, 296146576],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 27129804,
    center: {
      lat: 40.4455071,
      lon: -3.6771582,
    },
    nodes: [297655017, 297655018, 297655021, 297655022, 297655017],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 27466950,
    center: {
      lat: 41.4444638,
      lon: 2.2370431,
    },
    nodes: [
      301591808, 301591809, 6499576043, 6499576046, 6499576048, 301591810,
      301591811, 301591808,
    ],
    tags: {
      access: "private",
      hoops: "6",
      leisure: "stadium",
      "lines:basketball": "yes",
      lit: "yes",
      name: "Pavelló de Països Catalans",
      operator: "Ayuntamiento",
      sport: "basketball",
      surface: "parquet",
      "surface:condition": "maintained",
    },
  },
  {
    type: "way",
    id: 27710607,
    center: {
      lat: 42.8126448,
      lon: -1.6213793,
    },
    nodes: [304291011, 304291013, 304291014, 304291016, 304291011],
    tags: {
      hoops: "4",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 27764336,
    center: {
      lat: 43.1960066,
      lon: -2.4549657,
    },
    nodes: [304875162, 304875164, 304875165, 304875166, 304875162],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 27834790,
    center: {
      lat: 40.4719934,
      lon: -3.5843667,
    },
    nodes: [305603134, 305603135, 305603136, 305603137, 305603134],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 27927011,
    center: {
      lat: 40.4423008,
      lon: -3.6880124,
    },
    nodes: [306547609, 306547611, 306547613, 306547618, 306547609],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 27927013,
    center: {
      lat: 40.4424056,
      lon: -3.6863881,
    },
    nodes: [
      306547645, 11992821783, 306547647, 306547649, 306547651, 306547653,
      2911542363, 2911542359, 2911542360, 2911542364, 2911542365, 2911542361,
      2911542362, 2911542366, 306547655, 306547659, 306547661, 12009796790,
      306547663, 306547665, 306547667, 306547668, 306547645,
    ],
    tags: {
      "addr:city": "Madrid",
      "addr:country": "ES",
      "addr:housenumber": "127",
      "addr:postcode": "28006",
      "addr:street": "Calle de Serrano",
      building: "yes",
      leisure: "stadium",
      name: "Polideportivo Antonio Magariños",
      sport: "basketball",
      wikidata: "Q6081738",
      wikipedia: "es:Polideportivo Antonio Magariños",
    },
  },
  {
    type: "way",
    id: 28526579,
    center: {
      lat: 28.0923952,
      lon: -16.6863801,
    },
    nodes: [313352418, 313352420, 313352421, 313352422, 313352418],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 28565411,
    center: {
      lat: 41.7732498,
      lon: -2.4653154,
    },
    nodes: [313792071, 313792072, 313792073, 313792074, 313792071],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 28668600,
    center: {
      lat: 40.4619867,
      lon: -3.6319282,
    },
    nodes: [
      315059793, 315059795, 3106028184, 3106028182, 3106028180, 3106028178,
      315059796, 9043819973, 315059797, 3106028179, 3106028181, 3106028183,
      3106028185, 315059793,
    ],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 28778874,
    center: {
      lat: 40.3512711,
      lon: -3.7001111,
    },
    nodes: [316443730, 316443731, 316443732, 316443733, 316443730],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 28778883,
    center: {
      lat: 40.3531634,
      lon: -3.6971804,
    },
    nodes: [
      316443939, 5014295244, 316443936, 5014295233, 316443937, 316443938,
      316443939,
    ],
    tags: {
      "addr:city": "Madrid",
      "addr:postcode": "28041",
      "addr:street": "Calle de Anoeta",
      leisure: "sports_centre",
      name: "Instalación Deportiva Municipal Básica Ciudad de Los Ángeles",
      nohousenumber: "yes",
      operator: "Ayuntamiento de Madrid",
      "operator:type": "public",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 29070941,
    center: {
      lat: 40.4290847,
      lon: -3.6597689,
    },
    nodes: [3138510099, 3138510094, 3138510095, 3138510098, 3138510099],
    tags: {
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 29183523,
    center: {
      lat: 39.9937249,
      lon: -0.0319908,
    },
    nodes: [320934140, 320934141, 320934142, 320934143, 320934140],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 29183525,
    center: {
      lat: 39.9937056,
      lon: -0.0322468,
    },
    nodes: [320934136, 320934137, 320934138, 320934139, 320934136],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 29385154,
    center: {
      lat: 39.9907702,
      lon: -0.0290749,
    },
    nodes: [323210170, 323210171, 323210172, 323210173, 323210170],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 29410316,
    center: {
      lat: 40.3369306,
      lon: -3.8597845,
    },
    nodes: [324069153, 324069154, 324069155, 324069157, 324069153],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 29494361,
    center: {
      lat: 43.3472658,
      lon: -4.0627214,
    },
    nodes: [325119186, 325119188, 325119190, 325119192, 325119186],
    tags: {
      "addr:city": "Torrelavega",
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 29734486,
    center: {
      lat: 40.4371818,
      lon: -3.6663682,
    },
    nodes: [327597627, 327597639, 327597650, 327597658, 327597627],
    tags: {
      leisure: "pitch",
      name: "Instalación Deportiva Municipal Boston",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 30389914,
    center: {
      lat: 38.2556191,
      lon: -0.7080504,
    },
    nodes: [
      335432402, 335432409, 335432413, 335432419, 335432424, 335432429,
      335432402,
    ],
    tags: {
      leisure: "sports_centre",
      name: "Poliesportiu el Pla",
      "name:ca": "Poliesportiu el Pla",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 31821713,
    center: {
      lat: 40.3146719,
      lon: -3.7443638,
    },
    nodes: [356280820, 356280821, 356280822, 356280824, 356280820],
    tags: {
      created_by: "Potlatch 0.10f",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 32671941,
    center: {
      lat: 42.8072783,
      lon: -1.6507492,
    },
    nodes: [367610822, 367610829, 367610841, 367610881, 367610822],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 33292278,
    center: {
      lat: 42.7900217,
      lon: -1.6233802,
    },
    nodes: [378386134, 378386142, 378386154, 378386175, 378386134],
    tags: {
      building: "yes",
      leisure: "pitch",
      name: "Campo Mutilbasket",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 33292293,
    center: {
      lat: 42.7904445,
      lon: -1.6225484,
    },
    nodes: [
      378386628, 1093747079, 378386638, 1093746471, 378386655, 378386671,
      378386682, 378386693, 1823398457, 1823398456, 378386628,
    ],
    tags: {
      building: "yes",
      leisure: "pitch",
      name: "Campo Mutilbasket",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 33530816,
    center: {
      lat: 40.4779427,
      lon: -3.6663159,
    },
    nodes: [382477804, 382477809, 382477805, 382477807, 382477804],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 33654943,
    center: {
      lat: 39.5533741,
      lon: -0.542139,
    },
    nodes: [385018957, 385018955, 385018949, 385018990, 385018957],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 33654952,
    center: {
      lat: 39.5516329,
      lon: -0.53863,
    },
    nodes: [385019018, 385019017, 385019013, 385019009, 385019011, 385019018],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 33721643,
    center: {
      lat: 40.4578798,
      lon: -3.5938099,
    },
    nodes: [385582944, 385582945, 385582946, 385582947, 385582944],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2014",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 34242245,
    center: {
      lat: 28.7653738,
      lon: -17.9781384,
    },
    nodes: [392694361, 392694362, 392694363, 392694364, 392694361],
    tags: {
      leisure: "pitch",
      source: "Yahoo",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 34261883,
    center: {
      lat: 42.7758221,
      lon: -8.8948686,
    },
    nodes: [392949570, 991615457, 392949571, 392949572, 392949573, 392949570],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 34561105,
    center: {
      lat: 43.3448446,
      lon: -4.0644188,
    },
    nodes: [401213627, 401213623, 401213620, 401213631, 401213627],
    tags: {
      building: "roof",
      "building:levels": "1",
      leisure: "sports_centre",
      name: "Pista de baloncesto La Barquera",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 34778124,
    center: {
      lat: 41.4424868,
      lon: 2.2197303,
    },
    nodes: [
      406354063, 406354064, 3919216030, 3919216032, 3919216042, 3919216044,
      3919216056, 3919216258, 10199956082, 406354065, 10199956081, 406354066,
      406354063,
    ],
    tags: {
      access: "private",
      "addr:city": "Badalona",
      "addr:housenumber": "109-119",
      "addr:postcode": "08913",
      "addr:street": "Avinguda del Doctor Bassols",
      building: "yes",
      leisure: "sports_centre",
      lit: "yes",
      name: "Poliesportiu de Llefià",
      "name:ca": "Poliesportiu de Llefià",
      operator: "Ajuntament de Badalona",
      panoramax: "31a3f0e6-e4bc-4102-aceb-58252ab16080",
      phone: "+34933993351",
      sport: "basketball",
      surface: "acrylic",
      "surface:condition": "maintained",
    },
  },
  {
    type: "way",
    id: 36801858,
    center: {
      lat: 39.4792438,
      lon: -0.3357824,
    },
    nodes: [1956905809, 1956905817, 427808162, 427808154, 1956905809],
    tags: {
      access: "permit",
      covered: "no",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 36985148,
    center: {
      lat: 39.4609176,
      lon: -0.4598426,
    },
    nodes: [
      430085129, 430085131, 8922462581, 8922462580, 430085132, 8922462583,
      8922462582, 430085133, 430085129,
    ],
    tags: {
      building: "stadium",
      leisure: "stadium",
      name: "Pavelló esportiu",
      "name:ca": "Pavelló esportiu",
      "name:es": "Pabellón deportivo",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 36986053,
    center: {
      lat: 39.508803,
      lon: -0.3605662,
    },
    nodes: [430098801, 430098802, 430098803, 430098804, 430098801],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 36997377,
    center: {
      lat: 42.5983978,
      lon: -0.1218456,
    },
    nodes: [430279985, 430279986, 430279987, 430279988, 430279985],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 37466935,
    center: {
      lat: 36.8209311,
      lon: -2.4385525,
    },
    nodes: [438200814, 438200815, 438200816, 438200817, 438200814],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 37502461,
    center: {
      lat: 41.9918981,
      lon: -5.6682065,
    },
    nodes: [438764883, 438764884, 438764886, 438764888, 438764883],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 37523823,
    center: {
      lat: 41.9954906,
      lon: -5.6795158,
    },
    nodes: [
      439229817, 439229818, 4394928106, 439229819, 439229820, 4394928290,
      439229817,
    ],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 37678729,
    center: {
      lat: 28.4126615,
      lon: -16.5580382,
    },
    nodes: [
      441773064, 924001676, 441773066, 12365186544, 441773068, 441773070,
      441773064,
    ],
    tags: {
      leisure: "pitch",
      name: "Polideportivo municipal Manolo Santanella",
      source: "survey",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 37869560,
    center: {
      lat: 38.3833094,
      lon: -0.5035258,
    },
    nodes: [444375102, 444375103, 444375104, 444375105, 444375102],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 38176717,
    center: {
      lat: 43.3268447,
      lon: -1.9714756,
    },
    nodes: [449544473, 2678582549, 449544474, 449544475, 449544476, 449544473],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 38435602,
    center: {
      lat: 41.4883121,
      lon: 2.349849,
    },
    nodes: [454397571, 454397572, 454397573, 454397574, 454397571],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 38435603,
    center: {
      lat: 41.4886145,
      lon: 2.350188,
    },
    nodes: [454397575, 454397576, 454397577, 454397578, 454397575],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 38577549,
    center: {
      lat: 42.2064375,
      lon: -8.7773184,
    },
    nodes: [456944588, 456944589, 456944590, 456944591, 456944588],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 38577622,
    center: {
      lat: 42.2063999,
      lon: -8.7771801,
    },
    nodes: [456946250, 456946248, 456946253, 456946251, 456946250],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 38577623,
    center: {
      lat: 42.2063605,
      lon: -8.777035,
    },
    nodes: [456946257, 456946255, 456946260, 456946258, 456946257],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 38622845,
    center: {
      lat: 43.3012245,
      lon: -1.9764348,
    },
    nodes: [
      759982188, 2111274346, 2678582529, 2111274355, 457484260, 2111274350,
      457484263, 457484265, 2111274353, 2111274343, 759982188,
    ],
    tags: {
      "addr:city": "Donostia / San Sebastián",
      "addr:country": "ES",
      "addr:housenumber": "8",
      "addr:postcode": "20014",
      "addr:street": "Anoeta pasealekua",
      "b5m:id": "D_43540",
      "b5m:url": "http://b5m.gipuzkoa.net/b5map/r1/eu/mapa/lekutu/D_43540",
      "b5m:urlOrto":
        "http://b5m.gipuzkoa.net/url5000/index.php?id=D_43540&lengua=1&actu=0&categoria=VITO_FOTO",
      building: "yes",
      leisure: "sports_centre",
      name: "JA Gasca Kiroldegia",
      "name:es": "Polideportivo JA Gasca",
      source: "b5m",
      sport: "basketball",
      wheelchair: "limited",
    },
  },
  {
    type: "way",
    id: 38884454,
    center: {
      lat: 43.3567878,
      lon: -8.4156775,
    },
    nodes: [461928689, 461928694, 7879608237, 461928695, 461928697, 461928689],
    tags: {
      area: "yes",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 40110758,
    center: {
      lat: 43.2561835,
      lon: -2.9204938,
    },
    nodes: [482748157, 482748158, 482748159, 482748160, 482748157],
    tags: {
      leisure: "pitch",
      lit: "yes",
      name: "Jardines Solokoetxe",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 41304419,
    center: {
      lat: 43.3151307,
      lon: -3.02696,
    },
    nodes: [505036916, 505036939, 505036908, 505036883, 505036916],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 41304421,
    center: {
      lat: 43.3156812,
      lon: -3.0260241,
    },
    nodes: [505036967, 505036986, 505036979, 505036997, 505036967],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 41672222,
    center: {
      lat: 43.0544174,
      lon: -2.1716168,
    },
    nodes: [512395017, 512133676, 512133666, 512395025, 512395022, 512395017],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 42425976,
    center: {
      lat: 41.1116377,
      lon: 1.1431241,
    },
    nodes: [529686093, 529686092, 529686090, 529686094, 529686093],
    tags: {
      leisure: "pitch",
      name: "Parc de la Formiga",
      "name:ca": "Parc de la Formiga",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 42491585,
    center: {
      lat: 38.4043548,
      lon: -0.5248472,
    },
    nodes: [530664915, 530664917, 530664919, 530664922, 530664915],
    tags: {
      leisure: "pitch",
      name: "Pista Azul",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 42505876,
    center: {
      lat: 42.4596763,
      lon: -2.4636952,
    },
    nodes: [530778610, 530778611, 530778612, 530778613, 530778610],
    tags: {
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 42526305,
    center: {
      lat: 41.7378557,
      lon: -2.4894413,
    },
    nodes: [530962885, 530962887, 530962889, 530962891, 530962885],
    tags: {
      leisure: "track",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 42682132,
    center: {
      lat: 43.3181967,
      lon: -1.9324393,
    },
    nodes: [533745332, 533745334, 533745337, 533745339, 533745332],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 42743702,
    center: {
      lat: 43.5692143,
      lon: -6.9433571,
    },
    nodes: [
      534475285, 534475286, 534475592, 3703934087, 534475593, 534475591,
      534475289, 534475285,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 42881156,
    center: {
      lat: 43.3313327,
      lon: -3.0030915,
    },
    nodes: [536801225, 536801227, 536801226, 536801228, 536801225],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "geoeuskadi",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 42970492,
    center: {
      lat: 43.0476288,
      lon: -2.1976045,
    },
    nodes: [538200459, 538200472, 538200483, 538200499, 538200459],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 43205858,
    center: {
      lat: 38.3659207,
      lon: -0.4399578,
    },
    nodes: [300092393, 541565647, 541565650, 541565653, 300092393],
    tags: {
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 43619640,
    center: {
      lat: 43.2199995,
      lon: -2.7392373,
    },
    nodes: [
      551283268, 551283257, 551283307, 551283264, 9251050020, 9251050019,
      551283268,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 44070454,
    center: {
      lat: 41.3824239,
      lon: 2.0908168,
    },
    nodes: [560153594, 560153595, 560153596, 560153597, 560153594],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 44151016,
    center: {
      lat: 40.2092381,
      lon: 0.0307466,
    },
    nodes: [560906632, 560906633, 560906634, 560906635, 560906632],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 44167969,
    center: {
      lat: 38.3980284,
      lon: -0.5330923,
    },
    nodes: [561073492, 561073495, 561073494, 561073493, 561073492],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 44883335,
    center: {
      lat: 38.339774,
      lon: -0.5067527,
    },
    nodes: [569023441, 569023446, 569023445, 569023442, 569023441],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 44889911,
    center: {
      lat: 43.3757583,
      lon: -3.6812533,
    },
    nodes: [569107269, 569107270, 569107263, 569107264, 569107269],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 45033035,
    center: {
      lat: 40.9629386,
      lon: -5.6894468,
    },
    nodes: [571112142, 571112143, 571112144, 571112145, 571112142],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 45656179,
    center: {
      lat: 42.3285998,
      lon: -3.6233556,
    },
    nodes: [581848746, 581848747, 581848748, 581848749, 581848746],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 45748165,
    center: {
      lat: 43.4572038,
      lon: -3.8194776,
    },
    nodes: [582667035, 582667031, 582667046, 582667033, 582667035],
    tags: {
      leisure: "pitch",
      postal_code: "39008",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 46107386,
    center: {
      lat: 42.456065,
      lon: -2.458382,
    },
    nodes: [587743359, 587743360, 587743361, 587743362, 587743359],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 46139257,
    center: {
      lat: 43.3107256,
      lon: -1.9101599,
    },
    nodes: [588169517, 588169527, 588169528, 588169518, 588169517],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 46139258,
    center: {
      lat: 43.3108721,
      lon: -1.9101428,
    },
    nodes: [588169530, 588169532, 588169529, 588169531, 588169530],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 46139261,
    center: {
      lat: 43.3112447,
      lon: -1.9083639,
    },
    nodes: [588169726, 588169727, 4440278747, 588169724, 588169725, 588169726],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 46154937,
    center: {
      lat: 43.3135983,
      lon: -1.9054122,
    },
    nodes: [588467058, 588467065, 588467124, 588467111, 588467058],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 46429905,
    center: {
      lat: 42.4690813,
      lon: -2.460429,
    },
    nodes: [
      593732100, 593732103, 593732106, 593732108, 593732110, 593732114,
      593732118, 593732122, 593732100,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 46568553,
    center: {
      lat: 43.283074,
      lon: -2.1686306,
    },
    nodes: [595338587, 595338588, 595338590, 595338592, 595338587],
    tags: {
      access: "yes",
      leisure: "playground",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 46972672,
    center: {
      lat: 42.3529659,
      lon: -3.689687,
    },
    nodes: [599381292, 599381293, 599381294, 599381296, 599381292],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
      "surface:colour": "indianred",
    },
  },
  {
    type: "way",
    id: 46972674,
    center: {
      lat: 42.3528432,
      lon: -3.6897633,
    },
    nodes: [599381297, 599381296, 599381294, 599381300, 599381297],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
      "surface:colour": "indianred",
    },
  },
  {
    type: "way",
    id: 47219815,
    center: {
      lat: 40.4547718,
      lon: -3.5870543,
    },
    nodes: [601623900, 601623901, 601623902, 601623903, 601623900],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 47219816,
    center: {
      lat: 40.4549543,
      lon: -3.5868725,
    },
    nodes: [601623904, 601623905, 601623906, 601623907, 601623904],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 47321746,
    center: {
      lat: 42.358368,
      lon: -3.6891508,
    },
    nodes: [602726626, 602726628, 602726630, 602726632, 602726626],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 47321747,
    center: {
      lat: 42.3582485,
      lon: -3.689041,
    },
    nodes: [602726645, 602726636, 602726634, 602726644, 602726645],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 47321748,
    center: {
      lat: 42.3581235,
      lon: -3.6889369,
    },
    nodes: [602726650, 602726648, 602726647, 602726649, 602726650],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 47321749,
    center: {
      lat: 42.3579751,
      lon: -3.6892319,
    },
    nodes: [602726656, 602726653, 602726651, 602726654, 602726656],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 47333922,
    center: {
      lat: 39.9684776,
      lon: -0.2654517,
    },
    nodes: [602820085, 602820082, 602820084, 602820086, 602820085],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 47848173,
    center: {
      lat: 43.3177853,
      lon: -1.8983051,
    },
    nodes: [608562815, 608562817, 608562838, 608562841, 608562815],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 48475248,
    center: {
      lat: 42.878474,
      lon: -8.5468845,
    },
    nodes: [766473526, 764912439, 766498562, 764917545, 766473526],
    tags: {
      building: "sports_centre",
      description: "Pavillón",
      leisure: "sports_centre",
      name: "Pavillón do Instituto Rosalía de Castro",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 48526298,
    center: {
      lat: 41.0107719,
      lon: -5.709125,
    },
    nodes: [616499566, 616499567, 616499569, 616499568, 616499566],
    tags: {
      leisure: "pitch",
      source: "ITACyL",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 49186354,
    center: {
      lat: 42.8521147,
      lon: -2.6897028,
    },
    nodes: [623949742, 623949743, 623949744, 623949748, 623949742],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 49493268,
    center: {
      lat: 41.6259393,
      lon: 0.6315997,
    },
    nodes: [
      7776538571, 628824438, 10056311755, 628824429, 10053513937, 7776538572,
      7776538571,
    ],
    tags: {
      "addr:city": "Lleida",
      "addr:housenumber": "113",
      "addr:postcode": "25005",
      "addr:street": "Avinguda de Prat de la Riba",
      building: "yes",
      leisure: "sports_centre",
      name: "Pavelló Barris Nord",
      "name:ca": "Pavelló Barris Nord",
      source: "knowledge",
      sport: "basketball",
      wikidata: "Q6745183",
      wikipedia: "ca:Pavelló Barris Nord",
    },
  },
  {
    type: "way",
    id: 50603501,
    center: {
      lat: 40.2824479,
      lon: -3.8005372,
    },
    nodes: [
      2283282381, 1876391845, 1876391842, 1876391841, 5162957935, 2283282314,
      2283282381,
    ],
    tags: {
      building: "yes",
      "building:colour": "#d8d4da",
      "capacity:persons": "5100",
      height: "10",
      leisure: "stadium",
      name: "Pabellón Fernando Martín",
      "roof:colour": "#c387a2",
      sport: "basketball",
      wikidata: "Q3324750",
      wikipedia: "es:Polideportivo Fernando Martín",
    },
  },
  {
    type: "way",
    id: 51095313,
    center: {
      lat: 40.9460554,
      lon: -5.6331259,
    },
    nodes: [651816989, 651816993, 651816998, 651817000, 651816989],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 51156393,
    center: {
      lat: 42.7934323,
      lon: -1.6914744,
    },
    nodes: [652671997, 652672005, 652671999, 652671998, 652671997],
    tags: {
      area: "yes",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 51193321,
    center: {
      lat: 42.3593378,
      lon: -3.6630402,
    },
    nodes: [653147960, 653147962, 653147964, 653147966, 653147960],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 51326826,
    center: {
      lat: 36.7071874,
      lon: -3.4938963,
    },
    nodes: [654885693, 654885695, 654885710, 654885712, 654885693],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 52021526,
    center: {
      lat: 38.4048136,
      lon: -0.4599112,
    },
    nodes: [663204380, 663204381, 663204382, 663204383, 663204380],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 52503918,
    center: {
      lat: 38.3690216,
      lon: -0.4186964,
    },
    nodes: [667292757, 667292760, 667292759, 667292758, 667292757],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 52755260,
    center: {
      lat: 42.351337,
      lon: -3.6745382,
    },
    nodes: [669481859, 669481847, 669481806, 669481837, 669481859],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 53161918,
    center: {
      lat: 42.3506938,
      lon: -3.6926881,
    },
    nodes: [672776685, 672776677, 672776662, 672776633, 672776685],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 53175819,
    center: {
      lat: 28.4625585,
      lon: -16.2615644,
    },
    nodes: [672875153, 672875150, 672875149, 672875154, 672875153],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53666993,
    center: {
      lat: 43.2486851,
      lon: -2.9297964,
    },
    nodes: [677709848, 677709851, 677709854, 677709856, 677709848],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53670447,
    center: {
      lat: 43.2488797,
      lon: -2.9317214,
    },
    nodes: [677744705, 677744707, 677744702, 678843350, 677744704, 677744705],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53755211,
    center: {
      lat: 43.3605106,
      lon: -2.508129,
    },
    nodes: [678588681, 678588683, 678588680, 678588682, 678588681],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53818929,
    center: {
      lat: 37.8829414,
      lon: -1.3581923,
    },
    nodes: [679404740, 679404742, 679404743, 679404745, 679404740],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53819152,
    center: {
      lat: 37.8859101,
      lon: -1.3529718,
    },
    nodes: [679406973, 679406977, 679406981, 679406987, 679406973],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53899010,
    center: {
      lat: 43.0669745,
      lon: -2.4862176,
    },
    nodes: [680323367, 680323365, 680323374, 680323370, 680323367],
    tags: {
      leisure: "pitch",
      source: "b5m",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53901071,
    center: {
      lat: 43.0615546,
      lon: -2.4983891,
    },
    nodes: [680351199, 680351151, 680351148, 680351197, 680351199],
    tags: {
      leisure: "pitch",
      source: "b5m",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 53901072,
    center: {
      lat: 43.0615877,
      lon: -2.4981231,
    },
    nodes: [680351200, 680351153, 680351204, 680351202, 680351200],
    tags: {
      leisure: "pitch",
      source: "b5m",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 56185395,
    center: {
      lat: 40.4392393,
      lon: -3.732483,
    },
    nodes: [705045086, 708390109, 705045088, 705045089, 705045086],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "dirt",
    },
  },
  {
    type: "way",
    id: 56185747,
    center: {
      lat: 43.0496432,
      lon: -3.0026925,
    },
    nodes: [705047615, 705047584, 705047585, 705047604, 705047615],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 56185795,
    center: {
      lat: 40.4501873,
      lon: -3.7996139,
    },
    nodes: [705048118, 705048119, 705048120, 705048121, 705048118],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 56786598,
    center: {
      lat: 39.5882188,
      lon: 2.6412666,
    },
    nodes: [710656795, 710656785, 710656780, 710656775, 710656795],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 56786599,
    center: {
      lat: 39.5882197,
      lon: 2.6411166,
    },
    nodes: [710656770, 710656795, 710656775, 710656771, 710656770],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 56786607,
    center: {
      lat: 39.5877169,
      lon: 2.6418434,
    },
    nodes: [710656819, 710656787, 710656816, 710656810, 710656819],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 56786609,
    center: {
      lat: 39.5882197,
      lon: 2.6414239,
    },
    nodes: [710656785, 710656818, 710656813, 710656780, 710656785],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 57851466,
    center: {
      lat: 40.9605708,
      lon: -5.6726391,
    },
    nodes: [717718537, 717718539, 717718502, 717718542, 717718537],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 58409849,
    center: {
      lat: 40.9541077,
      lon: -5.7013723,
    },
    nodes: [724184304, 724184296, 724184294, 724184295, 724184304],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 58409869,
    center: {
      lat: 40.9525426,
      lon: -5.6817912,
    },
    nodes: [724184365, 724184367, 724184356, 724184354, 724184365],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 59538461,
    center: {
      lat: 43.2493142,
      lon: -2.9396837,
    },
    nodes: [738427197, 738427198, 738427200, 738427202, 738427197],
    tags: {
      leisure: "pitch",
      source: "GeoEuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 59538466,
    center: {
      lat: 43.2502539,
      lon: -2.9389774,
    },
    nodes: [738427241, 738427244, 738427245, 738427246, 738427241],
    tags: {
      leisure: "pitch",
      source: "GeoEuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 59607298,
    center: {
      lat: 41.0551603,
      lon: -4.7173881,
    },
    nodes: [739418080, 739417712, 739418125, 739417674, 739418080],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 59708783,
    center: {
      lat: 43.2798262,
      lon: -2.1736791,
    },
    nodes: [741022893, 741023090, 741022907, 741022971, 741022893],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 59744095,
    center: {
      lat: 42.3540196,
      lon: -3.6870881,
    },
    nodes: [741557052, 7176125668, 7176125667, 741557058, 741557052],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60005675,
    center: {
      lat: 42.8408101,
      lon: -2.6904222,
    },
    nodes: [745965541, 745965538, 745965550, 745965522, 745965541],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60040998,
    center: {
      lat: 37.3706993,
      lon: -5.9626941,
    },
    nodes: [746274832, 746274812, 746274602, 746274578, 746274832],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60041001,
    center: {
      lat: 37.3708038,
      lon: -5.9628596,
    },
    nodes: [746274826, 746274807, 746274598, 746274848, 746274826],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60041004,
    center: {
      lat: 37.3704894,
      lon: -5.9623606,
    },
    nodes: [746274785, 746274760, 746274828, 746274811, 746274785],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60041008,
    center: {
      lat: 37.3710734,
      lon: -5.9625614,
    },
    nodes: [746274839, 746274594, 746274613, 746274817, 746274839],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60041011,
    center: {
      lat: 37.3705948,
      lon: -5.9625274,
    },
    nodes: [746274739, 746274704, 746274792, 746274766, 746274739],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60321770,
    center: {
      lat: 40.4086819,
      lon: -3.728376,
    },
    nodes: [750138713, 5858536504, 750138712, 750138717, 750138713],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 60612051,
    center: {
      lat: 40.4081773,
      lon: -3.7279775,
    },
    nodes: [757497165, 757497171, 757497167, 757497170, 757497165],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 60821981,
    center: {
      lat: 43.3528297,
      lon: -2.8458006,
    },
    nodes: [761397898, 761397890, 761397907, 761397916, 761397898],
    tags: {
      leisure: "pitch",
      source: "GeoEuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 61278281,
    center: {
      lat: 37.396597,
      lon: -5.9645059,
    },
    nodes: [765623435, 765623420, 765623233, 765623469, 765623435],
    tags: {
      building: "stadium",
      "capacity:persons": "7626",
      leisure: "stadium",
      name: "Palacio de Deportes de San Pablo",
      sport: "basketball",
      wheelchair: "yes",
      wikidata: "Q1747710",
      wikimedia_commons: "Category:Palacio Municipal de Deportes San Pablo",
      wikipedia: "en:Palacio Municipal de Deportes San Pablo",
    },
  },
  {
    type: "way",
    id: 61423452,
    center: {
      lat: 39.5831977,
      lon: 2.6834887,
    },
    nodes: [766878590, 766878549, 766878575, 766878567, 766878590],
    tags: {
      leisure: "pitch",
      source: "ideib.cat WMS (see wiki)",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 61427108,
    center: {
      lat: 36.7218971,
      lon: -4.3623534,
    },
    nodes: [766911263, 766911227, 766911197, 766911170, 766911263],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 61801063,
    center: {
      lat: 36.7214127,
      lon: -4.3613103,
    },
    nodes: [770012942, 770012936, 770012939, 770012944, 770012942],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 61808210,
    center: {
      lat: 36.7251177,
      lon: -4.3685831,
    },
    nodes: [770057014, 770057017, 825114451, 770057034, 825114539, 770057014],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 61808215,
    center: {
      lat: 36.7247671,
      lon: -4.3684711,
    },
    nodes: [770057021, 770057033, 770057009, 770057025, 770057021],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 61908911,
    center: {
      lat: 42.7876713,
      lon: -8.8868089,
    },
    nodes: [771552784, 771552842, 771552756, 771552768, 771552784],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 62067056,
    center: {
      lat: 40.962012,
      lon: -5.6501447,
    },
    nodes: [773622715, 773623041, 773622594, 773622930, 773622715],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 62298838,
    center: {
      lat: 41.6146748,
      lon: -4.6887243,
    },
    nodes: [778310622, 778310520, 778309898, 778310600, 778310622],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 62331952,
    center: {
      lat: 42.318864,
      lon: -8.7873658,
    },
    nodes: [778688513, 778688514, 778688515, 778688516, 778688513],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 62373931,
    center: {
      lat: 41.6332877,
      lon: -0.9029167,
    },
    nodes: [779120147, 779120149, 7984780794, 779120153, 779120147],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 63108077,
    center: {
      lat: 41.6255649,
      lon: 0.6049905,
    },
    nodes: [783982442, 783982487, 783982429, 783982390, 783982442],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 64137091,
    center: {
      lat: 41.9800883,
      lon: 2.8190907,
    },
    nodes: [790645986, 790645997, 790646911, 790645963, 790645986],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64137099,
    center: {
      lat: 41.9775294,
      lon: 2.8221407,
    },
    nodes: [790645958, 790645967, 790645974, 790645925, 790645958],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64137102,
    center: {
      lat: 41.977621,
      lon: 2.8217268,
    },
    nodes: [790645937, 790645961, 790645989, 790646952, 790645937],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64137103,
    center: {
      lat: 41.9800427,
      lon: 2.8193876,
    },
    nodes: [790645940, 790646929, 790645950, 790646955, 790645940],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64137109,
    center: {
      lat: 41.9775711,
      lon: 2.8218892,
    },
    nodes: [790645987, 790646908, 790645920, 790645983, 790645987],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64270116,
    center: {
      lat: 43.3546503,
      lon: -8.2533744,
    },
    nodes: [791454878, 791454895, 791454889, 6864369984, 791454902, 791454878],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "PNOA",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 64654007,
    center: {
      lat: 42.8435613,
      lon: -2.6613904,
    },
    nodes: [
      6468131824, 6468153899, 595750737, 6468131823, 6468124604, 6468131824,
    ],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paving_stones",
    },
  },
  {
    type: "way",
    id: 64654018,
    center: {
      lat: 42.854576,
      lon: -2.6720908,
    },
    nodes: [793947250, 793947252, 793947251, 793947253, 793947250],
    tags: {
      leisure: "pitch",
      lit: "no",
      source: "GeoEuskadi",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 64738927,
    center: {
      lat: 41.6085116,
      lon: -4.682565,
    },
    nodes: [794352001, 794351902, 794351748, 794351932, 794352001],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64738944,
    center: {
      lat: 41.6088,
      lon: -4.6808606,
    },
    nodes: [794352070, 794351978, 794351918, 794351837, 794352070],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64793755,
    center: {
      lat: 43.3554273,
      lon: -5.9239092,
    },
    nodes: [
      794684929, 794685216, 11392594558, 11392594557, 794685143, 794684989,
      794684929,
    ],
    tags: {
      building: "yes",
      leisure: "sports_centre",
      name: "Polideportivo de San Claudio",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64946940,
    center: {
      lat: 41.9797473,
      lon: 2.8252871,
    },
    nodes: [795717264, 795717276, 795717262, 795717246, 795717264],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64969962,
    center: {
      lat: 41.9492815,
      lon: 2.8164258,
    },
    nodes: [795876302, 795876284, 795876464, 2787672971, 795876302],
    tags: {
      leisure: "pitch",
      source: "Ajuntament de Girona",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64969976,
    center: {
      lat: 41.9499458,
      lon: 2.8164394,
    },
    nodes: [795876396, 795876364, 795876447, 795876224, 795876396],
    tags: {
      leisure: "pitch",
      source: "Ajuntament de Girona",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 64987285,
    center: {
      lat: 41.9578896,
      lon: 2.8216168,
    },
    nodes: [796052408, 796052558, 796052418, 796052534, 796052408],
    tags: {
      leisure: "pitch",
      name: "Pista poliesportiva jocs olímpics",
      "name:ca": "Jocs Olímpics",
      source: "Ajuntament de Girona",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 65735006,
    center: {
      lat: 37.3739382,
      lon: -6.0115403,
    },
    nodes: [801033835, 801033842, 801033846, 801033851, 801033835],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 66285290,
    center: {
      lat: 42.6211885,
      lon: -6.4025738,
    },
    nodes: [803573166, 803573182, 803573188, 803573190, 803573166],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 66620165,
    center: {
      lat: 42.3246611,
      lon: -8.7932343,
    },
    nodes: [805995568, 805995596, 805995612, 805995630, 805995568],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 66648515,
    center: {
      lat: 37.4260477,
      lon: -5.9680887,
    },
    nodes: [806332436, 806332439, 806332441, 806332442, 806332436],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 68616818,
    center: {
      lat: 36.7238075,
      lon: -4.3611301,
    },
    nodes: [824954453, 824954784, 824954598, 824954971, 824954453],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 68634812,
    center: {
      lat: 36.7212361,
      lon: -4.3652435,
    },
    nodes: [825079001, 825078810, 825079084, 825078956, 825079001],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 68634815,
    center: {
      lat: 36.7209969,
      lon: -4.3649874,
    },
    nodes: [825078806, 825079035, 825078894, 825079176, 825078806],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 68634820,
    center: {
      lat: 36.7207625,
      lon: -4.365267,
    },
    nodes: [825079136, 825079184, 825079068, 825078888, 825079136],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 68636913,
    center: {
      lat: 36.7241724,
      lon: -4.3679824,
    },
    nodes: [825101965, 825101972, 825102009, 825101989, 825101965],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 68750323,
    center: {
      lat: 37.411174,
      lon: -5.9936975,
    },
    nodes: [826258142, 826258145, 826258149, 826258151, 826258142],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 69044317,
    center: {
      lat: 39.4555092,
      lon: -5.886543,
    },
    nodes: [828579552, 828579575, 828579590, 828579588, 828579552],
    tags: {
      leisure: "pitch",
      source: "PNOA;survey",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 69117120,
    center: {
      lat: 36.7292582,
      lon: -4.3551859,
    },
    nodes: [829165189, 829165484, 829165374, 829165279, 829165189],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 69117128,
    center: {
      lat: 36.7293911,
      lon: -4.3551551,
    },
    nodes: [829165317, 829165272, 829165174, 829165393, 829165317],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 69117130,
    center: {
      lat: 36.7284124,
      lon: -4.3546805,
    },
    nodes: [829165277, 829165202, 829165214, 829165453, 829165345, 829165277],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 69117143,
    center: {
      lat: 36.7291244,
      lon: -4.3552161,
    },
    nodes: [829165396, 829165347, 829165243, 829165485, 829165396],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 70039037,
    center: {
      lat: 43.2846147,
      lon: -2.9642304,
    },
    nodes: [
      836786498, 836786562, 836786540, 12681210818, 836786532, 1433209268,
      836786498,
    ],
    tags: {
      access: "yes",
      covered: "no",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 70794359,
    center: {
      lat: 37.3794542,
      lon: -5.9964062,
    },
    nodes: [844175534, 844175522, 844175424, 844175317, 844175534],
    tags: {
      leisure: "pitch",
      source: "ide.Sevilla",
      "source:date": "2011",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 70813723,
    center: {
      lat: 37.3791742,
      lon: -5.9962212,
    },
    nodes: [844504915, 844504916, 844504917, 844504918, 844504915],
    tags: {
      leisure: "pitch",
      source: "ide.Sevilla",
      "source:date": "2011",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 72850577,
    center: {
      lat: 41.6167757,
      lon: 2.2937281,
    },
    nodes: [
      864566077, 11518714272, 864566078, 1828189186, 864566081, 864566082,
      864566077,
    ],
    tags: {
      building: "yes",
      leisure: "sports_centre",
      name: "Pavelló Bàsquet Granollers",
      "name:ca": "Pavelló Bàsquet Granollers",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 72925488,
    center: {
      lat: 43.4209557,
      lon: -4.0383954,
    },
    nodes: [865338305, 865338366, 865338376, 3009507062, 865338345, 865338305],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 73422635,
    center: {
      lat: 41.6071898,
      lon: 2.2436528,
    },
    nodes: [870443844, 870443847, 870443848, 870443850, 870443844],
    tags: {
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74098621,
    center: {
      lat: 42.4119665,
      lon: -4.4966687,
    },
    nodes: [876530228, 876530226, 876530196, 876530198, 876530228],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74137819,
    center: {
      lat: 38.3580464,
      lon: -0.4952636,
    },
    nodes: [877045264, 877045683, 877046112, 877045425, 877045264],
    tags: {
      access: "permit",
      covered: "no",
      fee: "no",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 74316374,
    center: {
      lat: 38.3547535,
      lon: -0.4923918,
    },
    nodes: [878568168, 878567800, 878567326, 878568144, 878568168],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74316387,
    center: {
      lat: 38.3538218,
      lon: -0.494609,
    },
    nodes: [
      878567571, 878567143, 878567539, 878567984, 878567294, 878567623,
      878568097, 878567359, 878567819, 878568173, 878567438, 878567871,
      878567205, 878567531, 878567958, 878567269, 878567717, 878568020,
      878567332, 878567791, 878567117, 878567393, 878567854, 878567165,
      878567576, 878567210, 878567646, 878568108, 878567364, 878567724,
      878568186, 878567571,
    ],
    tags: {
      building: "yes",
      leisure: "sports_centre",
      name: "Centre de Tecnificació i Alt Rendiment",
      "name:ca": "Centre de Tecnificació i Alt Rendiment",
      "name:es": "Centre de Tecnificació i Alt Rendiment",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74316407,
    center: {
      lat: 38.3556703,
      lon: -0.4918785,
    },
    nodes: [878567662, 878567867, 878567119, 878567435, 878567662],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74327864,
    center: {
      lat: 38.3553059,
      lon: -0.4993758,
    },
    nodes: [878636718, 878636065, 878635453, 878636916, 878636718],
    tags: {
      access: "permit",
      covered: "no",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 74327867,
    center: {
      lat: 38.3554441,
      lon: -0.4991143,
    },
    nodes: [878635806, 878635132, 878636456, 878635763, 878635806],
    tags: {
      access: "permit",
      covered: "no",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 74417671,
    center: {
      lat: 37.4530804,
      lon: -3.9291876,
    },
    nodes: [879518280, 879518657, 879518461, 879518711, 879518280],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74477454,
    center: {
      lat: 38.3559825,
      lon: -0.5058441,
    },
    nodes: [880334747, 880334498, 880334228, 880334842, 880334747],
    tags: {
      leisure: "pit",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74477475,
    center: {
      lat: 38.3558213,
      lon: -0.5058619,
    },
    nodes: [880334173, 880334752, 880334506, 880334230, 880334173],
    tags: {
      leisure: "pit",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74477485,
    center: {
      lat: 38.3556472,
      lon: -0.5058644,
    },
    nodes: [880334570, 880334394, 880334135, 880334720, 880334570],
    tags: {
      leisure: "pit",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74477488,
    center: {
      lat: 38.355477,
      lon: -0.5058741,
    },
    nodes: [880334201, 880334785, 880334535, 880334272, 880334201],
    tags: {
      leisure: "pit",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 74477538,
    center: {
      lat: 38.3553163,
      lon: -0.5058936,
    },
    nodes: [880334524, 12276936160, 880334255, 880334887, 880334580, 880334524],
    tags: {
      leisure: "pit",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 75316028,
    center: {
      lat: 43.2860122,
      lon: -2.1736908,
    },
    nodes: [889371110, 889370901, 889371052, 889371108, 889371110],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 75318873,
    center: {
      lat: 43.2797358,
      lon: -2.1771766,
    },
    nodes: [889419781, 889419575, 889419741, 889419686, 889419781],
    tags: {
      leisure: "pitch",
      source: "GeoEuskadi",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 75450990,
    center: {
      lat: 43.2802767,
      lon: -2.1599316,
    },
    nodes: [890804081, 890804113, 890804202, 890804151, 890804081],
    tags: {
      leisure: "pitch",
      source: "GeoEuskadi",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 75615906,
    center: {
      lat: 37.3976668,
      lon: -5.9402533,
    },
    nodes: [892743880, 892743881, 892743882, 892743883, 892743880],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 75664003,
    center: {
      lat: 40.949813,
      lon: -5.6613208,
    },
    nodes: [893292427, 893292731, 893292367, 893293152, 893292427],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 75918397,
    center: {
      lat: 39.7594186,
      lon: 3.0185107,
    },
    nodes: [
      896324436, 12731366944, 896324559, 12731366945, 896324283, 896324162,
      896324436,
    ],
    tags: {
      check_date: "2025-04-12",
      leisure: "pitch",
      source:
        "ideib.cat WMS layer (see OSM wiki);aerial imagery;local knowledge;gabpr05",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 76256751,
    center: {
      lat: 41.4180389,
      lon: 2.1352728,
    },
    nodes: [899553946, 899553948, 899553949, 899553951, 899553946],
    tags: {
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 76256752,
    center: {
      lat: 41.4179503,
      lon: 2.1353755,
    },
    nodes: [899553961, 899553962, 899553965, 899553966, 899553961],
    tags: {
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 76823519,
    center: {
      lat: 42.8384938,
      lon: -2.7030163,
    },
    nodes: [
      904970060, 904969968, 5501773976, 904969959, 5501773979, 904970144,
      904970039, 904970060,
    ],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "geoeuskadi",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 77408916,
    center: {
      lat: 39.8064984,
      lon: -0.4118795,
    },
    nodes: [911122056, 911122057, 911122058, 911122059, 911122056],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 77588567,
    center: {
      lat: 39.6345245,
      lon: -0.3334734,
    },
    nodes: [912860031, 912860032, 912860034, 912860036, 912860031],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 77698053,
    center: {
      lat: 39.5175349,
      lon: -0.435239,
    },
    nodes: [
      1593062673, 913956196, 913956199, 1593062662, 913956229, 1593062673,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 77698055,
    center: {
      lat: 39.5175057,
      lon: -0.4360062,
    },
    nodes: [913956240, 913956242, 913956245, 913956250, 913956240],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 77805453,
    center: {
      lat: 39.481619,
      lon: -0.3619477,
    },
    nodes: [914794995, 914794996, 914794998, 914794999, 914794995],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 77835719,
    center: {
      lat: 39.6330837,
      lon: -0.3303842,
    },
    nodes: [915025194, 915025196, 915025198, 915025201, 915025194],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 78395341,
    center: {
      lat: 36.7463446,
      lon: -3.8785753,
    },
    nodes: [920096476, 920096499, 920096464, 920096481, 920096476],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 78505809,
    center: {
      lat: 36.7563378,
      lon: -3.8748316,
    },
    nodes: [921259638, 921259646, 921259647, 921259645, 921259638],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 78595258,
    center: {
      lat: 42.8878743,
      lon: -8.5422604,
    },
    nodes: [
      922122174, 922122175, 3783492555, 3783492556, 922122176, 922122177,
      922122174,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 79079390,
    center: {
      lat: 40.9805359,
      lon: -5.6661053,
    },
    nodes: [924118907, 924118853, 924118886, 924118912, 924118907],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 79079435,
    center: {
      lat: 40.9794939,
      lon: -5.6660513,
    },
    nodes: [924118800, 924118894, 924118925, 924118742, 924118800],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 79568327,
    center: {
      lat: 41.6476383,
      lon: -4.7481723,
    },
    nodes: [927305231, 928537064, 928537060, 927309150, 927305231],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 79714834,
    center: {
      lat: 39.597767,
      lon: 2.6783526,
    },
    nodes: [930275226, 930275409, 930275299, 930275201, 930275226],
    tags: {
      leisure: "pitch",
      name: "Plaça Cala Moreia",
      "name:ca": "Plaça Cala Moreia",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 79816154,
    center: {
      lat: 39.773269,
      lon: 3.1395133,
    },
    nodes: [931684741, 931684724, 931684737, 931684733, 931684741],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 79843894,
    center: {
      lat: 42.1741351,
      lon: 3.1094991,
    },
    nodes: [931986449, 931986457, 931986445, 931986446, 931986449],
    tags: {
      leisure: "pitch",
      lit: "no",
      name: "Pistes del Càmping Aquarius",
      "name:ca": "Pistes del Càmping Aquarius",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 80442522,
    center: {
      lat: 38.2661407,
      lon: -0.6862416,
    },
    nodes: [938641911, 938641912, 938641913, 938641914, 938641911],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 80442548,
    center: {
      lat: 38.2661623,
      lon: -0.6867928,
    },
    nodes: [938642246, 938642247, 938642249, 938642250, 938642246],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 80652610,
    center: {
      lat: 42.3351257,
      lon: -3.7009127,
    },
    nodes: [940734916, 940734947, 940734948, 940735020, 940734916],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 80771701,
    center: {
      lat: 39.5934916,
      lon: 2.6220481,
    },
    nodes: [941937817, 941937777, 941937896, 941937793, 941937923, 941937817],
    tags: {
      leisure: "pitch",
      name: "pista Miquel Bosch Espases",
      "name:ca": "pista Miquel Bosch Espases",
      source: "ideib WMS + cadastre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 80911189,
    center: {
      lat: 41.7173078,
      lon: 2.9301587,
    },
    nodes: [943219071, 943219072, 943219073, 943219074, 943219071],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 81063519,
    center: {
      lat: 28.479385,
      lon: -16.2419105,
    },
    nodes: [944909783, 944909785, 944898138, 944909787, 944909783],
    tags: {
      leisure: "stadium",
      source: "Yahoo",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 81202354,
    center: {
      lat: 40.4022864,
      lon: -3.70752,
    },
    nodes: [946113409, 946113545, 946113837, 946113818, 946113409],
    tags: {
      access: "yes",
      "addr:city": "Madrid",
      "addr:housenumber": "32",
      "addr:postcode": "28005",
      "addr:street": "Calle del Gasómetro",
      hoops: "2",
      leisure: "pitch",
      lit: "no",
      name: "Instalación Deportiva Municipal Básica Doctor Vallejo-Nájera",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 82077872,
    center: {
      lat: 42.8409836,
      lon: -2.6898781,
    },
    nodes: [955934332, 955933985, 955934666, 955934494, 955934332],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 82201947,
    center: {
      lat: 42.3384878,
      lon: -3.6940937,
    },
    nodes: [957053969, 957053891, 957053851, 957053996, 957053969],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 82802975,
    center: {
      lat: 41.3697113,
      lon: 2.1049988,
    },
    nodes: [963672048, 963672051, 963672053, 963672054, 963672048],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 82900559,
    center: {
      lat: 28.4743538,
      lon: -16.2492302,
    },
    nodes: [964840279, 964833315, 964822877, 964840281, 964840279],
    tags: {
      leisure: "pitch",
      lit: "yes",
      name: "Cancha de baloncesto Pisaca",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 83052257,
    center: {
      lat: 40.9520322,
      lon: -5.6778224,
    },
    nodes: [966203893, 966203832, 966204081, 966204300, 966203893],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 83200003,
    center: {
      lat: 41.3650533,
      lon: 2.111249,
    },
    nodes: [968098720, 968098728, 968098730, 968098731, 968098720],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83201872,
    center: {
      lat: 28.1252049,
      lon: -16.7373418,
    },
    nodes: [968116208, 968116178, 968116216, 968116154, 968116208],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83259327,
    center: {
      lat: 28.1441377,
      lon: -16.4417258,
    },
    nodes: [968726901, 2198753804, 2198753770, 2265725246, 968726901],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83262760,
    center: {
      lat: 28.3965605,
      lon: -16.5509657,
    },
    nodes: [
      968772369, 968772534, 968772441, 968772375, 968772521, 968772427,
      968772339, 968772369,
    ],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83286053,
    center: {
      lat: 28.3903942,
      lon: -16.6725156,
    },
    nodes: [969078394, 969078033, 969078113, 969077846, 969078394],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83571304,
    center: {
      lat: 42.3917414,
      lon: -7.1276348,
    },
    nodes: [973208481, 973208556, 973208814, 973208722, 973208481],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2007",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83606477,
    center: {
      lat: 39.5327295,
      lon: -0.3559916,
    },
    nodes: [973642189, 973642190, 973642191, 973642192, 973642189],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 83705156,
    center: {
      lat: 39.6869684,
      lon: 2.8373022,
    },
    nodes: [683247754, 685447638, 685447661, 683247760, 683247754],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 84015325,
    center: {
      lat: 42.0007265,
      lon: -4.5323055,
    },
    nodes: [977530288, 977530845, 977530565, 977530903, 977530288],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 84015342,
    center: {
      lat: 42.0007293,
      lon: -4.5325929,
    },
    nodes: [977530124, 977530288, 977530903, 977530626, 977530124],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 84435176,
    center: {
      lat: 40.713177,
      lon: -3.9824183,
    },
    nodes: [981281372, 981280122, 981280960, 981281278, 981281372],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 84762264,
    center: {
      lat: 38.3739978,
      lon: -0.430329,
    },
    nodes: [984472142, 984472543, 984472819, 984472498, 984472142],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 84762335,
    center: {
      lat: 38.3739216,
      lon: -0.4305326,
    },
    nodes: [984472907, 984472164, 984472609, 984472104, 984472907],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 84802583,
    center: {
      lat: 42.0024464,
      lon: -4.5246479,
    },
    nodes: [984670429, 984670729, 984669880, 984670064, 984670429],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 84802663,
    center: {
      lat: 42.0026183,
      lon: -4.5245266,
    },
    nodes: [984670729, 5654941900, 984670637, 984669846, 984669880, 984670729],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 85592226,
    center: {
      lat: 42.8429733,
      lon: -8.9131725,
    },
    nodes: [992900386, 992900390, 992900383, 992900399, 992900386],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 85741172,
    center: {
      lat: 39.5806374,
      lon: 2.6440725,
    },
    nodes: [995315600, 995315794, 995315542, 995315382, 995315600],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 85747163,
    center: {
      lat: 39.5722502,
      lon: 2.641173,
    },
    nodes: [995376415, 995376387, 995376350, 251801508, 995376415],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 85747172,
    center: {
      lat: 39.5723735,
      lon: 2.6406311,
    },
    nodes: [
      995376393, 995376353, 995376287, 995376357, 995376352, 995376319,
      995376393,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 86040504,
    center: {
      lat: 28.4658246,
      lon: -16.2596775,
    },
    nodes: [998453342, 998453340, 998453341, 998453334, 998453342],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2005",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 86226159,
    center: {
      lat: 42.3462342,
      lon: -3.6905921,
    },
    nodes: [1000969026, 1000969581, 1000968810, 1000969401, 1000969026],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 86387089,
    center: {
      lat: 41.1190909,
      lon: 1.2496264,
    },
    nodes: [1003702327, 1003702435, 1003702640, 1003702472, 1003702327],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 86387093,
    center: {
      lat: 41.119217,
      lon: 1.2496593,
    },
    nodes: [1003702647, 1003702380, 1003702516, 1003702571, 1003702647],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 86977047,
    center: {
      lat: 28.4794458,
      lon: -16.2408159,
    },
    nodes: [1011896771, 1011896909, 1011897106, 1011896805, 1011896771],
    tags: {
      leisure: "pitch",
      source: "Yahoo",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 87101725,
    center: {
      lat: 40.476327,
      lon: -3.5561153,
    },
    nodes: [1012980816, 1012980729, 1012981173, 1012980662, 1012980816],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 87144149,
    center: {
      lat: 28.2023304,
      lon: -16.8324315,
    },
    nodes: [
      1013366111, 10607011787, 1013366076, 1013366123, 1013366051, 1013366111,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 87538751,
    center: {
      lat: 39.5568368,
      lon: -0.3280332,
    },
    nodes: [1018400059, 1018400122, 1018400084, 1018400051, 1018400059],
    tags: {
      leisure: "pitch",
      name: "Pista de bàsquet",
      "name:ca": "Pista de bàsquet",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88374697,
    center: {
      lat: 40.4505756,
      lon: -3.6797603,
    },
    nodes: [1026510119, 1026510112, 1026510123, 1026510113, 1026510119],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88374698,
    center: {
      lat: 40.4507907,
      lon: -3.6799566,
    },
    nodes: [1026510114, 1026510127, 1026510115, 1026510106, 1026510114],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88374699,
    center: {
      lat: 40.4506006,
      lon: -3.6800371,
    },
    nodes: [1026510111, 1026510122, 1026510107, 1026510110, 1026510111],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88604517,
    center: {
      lat: 37.1875912,
      lon: -3.5881767,
    },
    nodes: [1028893283, 1028895775, 1028892361, 1028892715, 1028893283],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88647243,
    center: {
      lat: 36.6942425,
      lon: -4.4480362,
    },
    nodes: [1029372407, 1029372410, 1029372413, 1029372415, 1029372407],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 88878346,
    center: {
      lat: 41.1200926,
      lon: 1.2121556,
    },
    nodes: [1031595653, 1031596716, 1031596087, 1031595545, 1031595653],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88878435,
    center: {
      lat: 41.1199729,
      lon: 1.2118005,
    },
    nodes: [1031598486, 1031597905, 1031597435, 1031596056, 1031598486],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88878477,
    center: {
      lat: 41.1219411,
      lon: 1.2083812,
    },
    nodes: [1031598285, 1031597577, 1031597105, 1031595881, 1031598285],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 88878588,
    center: {
      lat: 41.1200329,
      lon: 1.2119818,
    },
    nodes: [1031595165, 1031598692, 1031598355, 1031596871, 1031595165],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 89106620,
    center: {
      lat: 43.1201201,
      lon: -7.626321,
    },
    nodes: [1033733677, 1033733607, 1033733647, 1033733631, 1033733677],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 89209602,
    center: {
      lat: 39.5978798,
      lon: 2.6419394,
    },
    nodes: [
      1035392461, 1035392505, 1035392556, 1035392435, 1035392483, 2218396773,
      1035392461,
    ],
    tags: {
      barrier: "fence",
      leisure: "pitch",
      lit: "yes",
      source: "survey;ideib WMS",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 90446688,
    center: {
      lat: 42.2359087,
      lon: -8.7134436,
    },
    nodes: [1049357636, 1049357631, 1049357521, 1049357592, 1049357636],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 91393447,
    center: {
      lat: 42.2211312,
      lon: -8.7360186,
    },
    nodes: [1061715235, 1061715183, 1061715244, 1061715242, 1061715235],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 91823610,
    center: {
      lat: 42.7673808,
      lon: -2.7232883,
    },
    nodes: [1067002510, 1067002767, 1067003071, 1067002446, 1067002510],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 92317309,
    center: {
      lat: 40.6971633,
      lon: -3.9228923,
    },
    nodes: [1071449861, 1071450756, 1071448718, 1071450940, 1071449861],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 92358115,
    center: {
      lat: 42.1529898,
      lon: -8.6326477,
    },
    nodes: [1071907519, 1071907518, 1071907498, 1071907630, 1071907519],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 92438467,
    center: {
      lat: 40.4612694,
      lon: -3.8795114,
    },
    nodes: [1073129376, 1073129989, 1073130427, 1073129220, 1073129376],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 92438480,
    center: {
      lat: 40.4611223,
      lon: -3.8793869,
    },
    nodes: [1073129390, 1073130011, 1073129248, 1073130309, 1073129390],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 92479537,
    center: {
      lat: 40.452719,
      lon: -3.8502414,
    },
    nodes: [1073594319, 1073594441, 1073594091, 1073594387, 1073594319],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 93404170,
    center: {
      lat: 37.9998314,
      lon: -0.6957163,
    },
    nodes: [1082957869, 1082957865, 1082957867, 1082957852, 1082957869],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 93583434,
    center: {
      lat: 42.2100105,
      lon: -8.7301456,
    },
    nodes: [1085502828, 1085502871, 1085502886, 1085502892, 1085502828],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 93583441,
    center: {
      lat: 42.2098386,
      lon: -8.7300926,
    },
    nodes: [1085502881, 1085502868, 1085502898, 1085502866, 1085502881],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 93794798,
    center: {
      lat: 39.4871467,
      lon: 2.9005157,
    },
    nodes: [
      1089335819, 1089336009, 1089336027, 1089335844, 1089336077, 1089335819,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 93799411,
    center: {
      lat: 41.6366067,
      lon: -4.7370072,
    },
    nodes: [1089468829, 1089468833, 1089468840, 1089468843, 1089468829],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 93891794,
    center: {
      lat: 41.456208,
      lon: 2.2529443,
    },
    nodes: [1091496706, 1091496529, 1091496638, 1091496682, 1091496706],
    tags: {
      access: "yes",
      description:
        "Cistelles de ferro,xarxa de goma, terra relliscant, acumulació de gent",
      hoops: "2",
      leisure: "pitch",
      "lines:basketball": "yes",
      lit: "yes",
      operator: "Ajuntament",
      panoramax: "16accb0e-b1d1-4254-b3a8-13546c4e989c",
      sport: "basketball",
      surface: "concrete",
      "surface:condition": "uneven",
    },
  },
  {
    type: "way",
    id: 94014443,
    center: {
      lat: 43.5502362,
      lon: -5.90226,
    },
    nodes: [1092824825, 1092823511, 1092822375, 1092820806, 1092824825],
    tags: {
      leisure: "pitch",
      name: "Pista C.P. Llaranes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 94014445,
    center: {
      lat: 43.5500276,
      lon: -5.9025606,
    },
    nodes: [1092822024, 1092820374, 1092824998, 1092823642, 1092822024],
    tags: {
      leisure: "pitch",
      name: "Pista C.P. Llaranes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 94225699,
    center: {
      lat: 42.8065731,
      lon: -1.6584204,
    },
    nodes: [1095022035, 1095023200, 1095021646, 1095022360, 1095022035],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "PNOA",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 94225731,
    center: {
      lat: 42.8055568,
      lon: -1.660067,
    },
    nodes: [1095023448, 1095025127, 1095021953, 1095026135, 1095023448],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 94226149,
    center: {
      lat: 42.806048,
      lon: -1.6600324,
    },
    nodes: [1095022716, 1095024090, 1095025936, 1095022444, 1095022716],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 94226198,
    center: {
      lat: 42.8057682,
      lon: -1.6603915,
    },
    nodes: [1095023326, 1095024953, 1095025351, 1095023229, 1095023326],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 94728386,
    center: {
      lat: 43.3097001,
      lon: -4.2300371,
    },
    nodes: [1099888605, 1099888628, 1099888614, 1099888689, 1099888605],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 94781251,
    center: {
      lat: 42.8456964,
      lon: -8.5188754,
    },
    nodes: [1100359314, 1100359496, 1100359250, 1100359535, 1100359314],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 95506391,
    center: {
      lat: 41.3067007,
      lon: 2.0081034,
    },
    nodes: [1107467274, 1107467275, 1107467276, 1107467277, 1107467274],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 95665049,
    center: {
      lat: 38.2975608,
      lon: -0.5689359,
    },
    nodes: [
      1109146118, 5422407208, 1109145702, 1109146037, 1109145832, 1109146118,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96261175,
    center: {
      lat: 28.1960979,
      lon: -16.4230351,
    },
    nodes: [2754439306, 1115819610, 1115819714, 2754439302, 2754439306],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96408980,
    center: {
      lat: 38.7093689,
      lon: 0.0391286,
    },
    nodes: [1117224363, 1117224243, 1117224276, 1117224280, 1117224363],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96418696,
    center: {
      lat: 40.2803712,
      lon: -3.8196541,
    },
    nodes: [1117352915, 1117351627, 1117353722, 1117352741, 1117352915],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96418702,
    center: {
      lat: 40.279818,
      lon: -3.8196576,
    },
    nodes: [1117354896, 1117354621, 1117353234, 1117351933, 1117354896],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96418739,
    center: {
      lat: 40.2803712,
      lon: -3.8200354,
    },
    nodes: [1117354740, 1117353749, 1117352427, 1117354511, 1117354740],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96418870,
    center: {
      lat: 40.2798264,
      lon: -3.8200508,
    },
    nodes: [1117354253, 1117353972, 1117354710, 1117352398, 1117354253],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96865908,
    center: {
      lat: 41.3181074,
      lon: 1.4563971,
    },
    nodes: [1122440520, 1122445151, 1122443848, 1122437615, 1122440520],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96881421,
    center: {
      lat: 42.8862931,
      lon: -8.5358195,
    },
    nodes: [1122548258, 1122548167, 1122548142, 1122548195, 1122548258],
    tags: {
      leisure: "pitch",
      name: "Pista de Deportes da Almáciga",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96886261,
    center: {
      lat: 42.8859207,
      lon: -8.5434924,
    },
    nodes: [1122621072, 1122620848, 1122620977, 1122621116, 1122621072],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96886264,
    center: {
      lat: 42.8647534,
      lon: -8.5531692,
    },
    nodes: [1122620830, 1122620614, 1122620757, 1122620974, 1122620830],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96886281,
    center: {
      lat: 42.8861249,
      lon: -8.543359,
    },
    nodes: [1122621116, 1122620977, 1122620805, 1122620919, 1122621116],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96886293,
    center: {
      lat: 42.8867224,
      lon: -8.524409,
    },
    nodes: [1122620873, 1122620661, 1122620794, 1122620818, 1122620873],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 96886331,
    center: {
      lat: 42.8666537,
      lon: -8.5424479,
    },
    nodes: [1122620907, 1122620821, 1122620937, 1122621071, 1122620907],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 96886338,
    center: {
      lat: 42.8863333,
      lon: -8.5432255,
    },
    nodes: [1122620919, 1122620805, 1122620736, 1122620855, 1122620919],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 97099425,
    center: {
      lat: 42.8836174,
      lon: -8.5405961,
    },
    nodes: [1124928603, 1124928576, 1124928598, 1124928653, 1124928603],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 97099426,
    center: {
      lat: 42.8839687,
      lon: -8.5399186,
    },
    nodes: [
      1124928625, 1124928651, 1124928616, 1124928586, 1124928582, 1124928625,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 97099428,
    center: {
      lat: 42.883746,
      lon: -8.5405769,
    },
    nodes: [1124928576, 1124928603, 1124928647, 1124928612, 1124928576],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 97224199,
    center: {
      lat: 40.3704588,
      lon: -3.6569088,
    },
    nodes: [1126235164, 1126234252, 1126234088, 1126235242, 1126235164],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 97230720,
    center: {
      lat: 38.8728532,
      lon: -6.9648123,
    },
    nodes: [1126292273, 1126292439, 1126292769, 1126292150, 1126292273],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 97902988,
    center: {
      lat: 42.8257259,
      lon: -2.7347307,
    },
    nodes: [
      9465520454, 1133095339, 1133095345, 9465520444, 9465520465, 9465520454,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 98296308,
    center: {
      lat: 40.4739685,
      lon: -3.6515359,
    },
    nodes: [1137331660, 1137331833, 1137331625, 1137332291, 1137331660],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 98704975,
    center: {
      lat: 36.7151493,
      lon: -4.4437894,
    },
    nodes: [
      1141945414, 1141945382, 1141945368, 1141945383, 1141945386, 1141945380,
      1141945414,
    ],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 98733071,
    center: {
      lat: 36.7201185,
      lon: -4.4459351,
    },
    nodes: [1142201085, 1142201461, 1142201394, 1142201044, 1142201085],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 98733098,
    center: {
      lat: 36.7199253,
      lon: -4.4452255,
    },
    nodes: [1142201440, 1142201101, 5232876131, 5232876130, 1142201440],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 98742931,
    center: {
      lat: 37.3893553,
      lon: -5.9257851,
    },
    nodes: [1142412864, 1142412761, 1142412595, 1142412550, 1142412864],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 98859201,
    center: {
      lat: 36.7248203,
      lon: -4.4398267,
    },
    nodes: [1143690333, 1143690345, 1143690346, 1143690356, 1143690333],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 99664577,
    center: {
      lat: 37.2612976,
      lon: -6.9555534,
    },
    nodes: [1152376675, 1152376680, 1152376676, 1152376669, 1152376675],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 99688649,
    center: {
      lat: 37.2818906,
      lon: -6.9442415,
    },
    nodes: [1152551045, 1152550951, 1152550992, 1152551012, 1152551045],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 99688651,
    center: {
      lat: 37.2788012,
      lon: -6.9511774,
    },
    nodes: [1152551036, 1152551016, 1152551018, 1152551026, 1152551036],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 99688655,
    center: {
      lat: 37.2787373,
      lon: -6.9509767,
    },
    nodes: [1152550982, 1152550995, 1152551020, 1152550993, 1152550982],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 99703462,
    center: {
      lat: 42.8769023,
      lon: -8.553306,
    },
    nodes: [1152753332, 1152754235, 1152754484, 1152753628, 1152753332],
    tags: {
      leisure: "pitch",
      name: "Cancha de Baloncesto da USC",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 101219216,
    center: {
      lat: 39.8643825,
      lon: -4.0314591,
    },
    nodes: [1168505981, 1168505994, 1168506003, 1168506016, 1168505981],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 101502495,
    center: {
      lat: 38.7860455,
      lon: 0.1622379,
    },
    nodes: [1171966805, 1171966781, 1171966824, 1171966778, 1171966805],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 101926151,
    center: {
      lat: 39.8703972,
      lon: -4.004193,
    },
    nodes: [1176704634, 1176704775, 1176704718, 1176704746, 1176704634],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102010087,
    center: {
      lat: 40.0775454,
      lon: -2.1456058,
    },
    nodes: [1177581093, 1177580556, 1177579378, 1177581280, 1177581093],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102154801,
    center: {
      lat: 40.4151389,
      lon: -3.7201921,
    },
    nodes: [1179021910, 1179022228, 1179021820, 1179022404, 1179021910],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 102234340,
    center: {
      lat: 42.7312591,
      lon: -2.7539877,
    },
    nodes: [1179953950, 1179954135, 1179955932, 1179954533, 1179953950],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102275800,
    center: {
      lat: 39.9857824,
      lon: -0.0560993,
    },
    nodes: [1180651249, 1180651430, 1180651464, 1180651403, 1180651249],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102546793,
    center: {
      lat: 40.4518456,
      lon: -3.7731543,
    },
    nodes: [1184275477, 1184275520, 1184275456, 1184275468, 1184275477],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102597833,
    center: {
      lat: 39.8658379,
      lon: -4.0298884,
    },
    nodes: [1184797876, 1184797841, 1184797799, 1184798001, 1184797876],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102597835,
    center: {
      lat: 39.8658728,
      lon: -4.0297343,
    },
    nodes: [1184797917, 1184797908, 1184797991, 1184797961, 1184797917],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102619649,
    center: {
      lat: 39.8791007,
      lon: -4.0292385,
    },
    nodes: [1185025043, 1185025029, 1185025045, 1185025046, 1185025043],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 102928445,
    center: {
      lat: 42.895897,
      lon: -2.1645706,
    },
    nodes: [1191249327, 1191246583, 1191244884, 1191243058, 1191249327],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 103238111,
    center: {
      lat: 42.359273,
      lon: -3.6613479,
    },
    nodes: [1191958504, 1191958517, 1191958511, 1191958502, 1191958504],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 103238112,
    center: {
      lat: 42.3590815,
      lon: -3.6616022,
    },
    nodes: [1191958515, 1191958499, 1191958513, 1191958509, 1191958515],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 103245022,
    center: {
      lat: 42.8328791,
      lon: -2.7866623,
    },
    nodes: [1192103481, 1192104007, 1192107488, 1192104820, 1192103481],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 103430484,
    center: {
      lat: 39.8661438,
      lon: -4.0247629,
    },
    nodes: [
      1194290501, 1194290552, 1194290400, 1194290465, 1194290490, 1194290501,
    ],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 103552177,
    center: {
      lat: 39.8806988,
      lon: -4.032144,
    },
    nodes: [1195590830, 1195590783, 1195590560, 1195590722, 1195590830],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 103552184,
    center: {
      lat: 39.8768256,
      lon: -4.0347376,
    },
    nodes: [1195590660, 1195590798, 1195590801, 1195590946, 1195590660],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
      surface: "artificial_turf",
    },
  },
  {
    type: "way",
    id: 103772677,
    center: {
      lat: 37.1439805,
      lon: -3.6230624,
    },
    nodes: [1198086202, 1198086051, 1198086244, 1198086433, 1198086202],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 104079805,
    center: {
      lat: 39.8749649,
      lon: -4.0299369,
    },
    nodes: [1201127238, 1201127114, 1201127165, 1201127216, 1201127238],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 104539050,
    center: {
      lat: 42.1030514,
      lon: 1.8420998,
    },
    nodes: [
      1206219605, 1206219409, 2829564512, 1206219759, 1206219661, 1206219605,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 105079991,
    center: {
      lat: 40.3977606,
      lon: -3.6307319,
    },
    nodes: [1211291149, 1211291485, 1211291967, 1211290819, 1211291149],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 105286144,
    center: {
      lat: 37.1414536,
      lon: -3.6171681,
    },
    nodes: [1213391743, 1213392051, 1213392284, 1213391791, 1213391743],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 105286198,
    center: {
      lat: 37.1357726,
      lon: -3.6194285,
    },
    nodes: [
      1213392255, 1213391843, 1213392074, 1213392077, 1213392320, 1213392255,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 106466995,
    center: {
      lat: 40.3998948,
      lon: -3.6561556,
    },
    nodes: [1224768590, 1224767764, 1224768293, 1224768554, 1224768590],
    tags: {
      access: "yes",
      barrier: "fence",
      fee: "no",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 106466999,
    center: {
      lat: 40.3995271,
      lon: -3.6563314,
    },
    nodes: [1224768618, 1224768528, 1224767509, 1224767874, 1224768618],
    tags: {
      access: "yes",
      barrier: "fence",
      fee: "no",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 107495142,
    center: {
      lat: 42.7138296,
      lon: -2.7359783,
    },
    nodes: [1235343547, 1235343737, 1235344675, 1235344588, 1235343547],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107497818,
    center: {
      lat: 42.7249493,
      lon: -2.7116315,
    },
    nodes: [1235364114, 1235364418, 1235364347, 1235364055, 1235364114],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107543095,
    center: {
      lat: 42.3469837,
      lon: -3.668013,
    },
    nodes: [
      1235839542, 1235839543, 1235839541, 1235839540, 6008255402, 6008255406,
      1235839542,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107545161,
    center: {
      lat: 42.3430469,
      lon: -3.6509962,
    },
    nodes: [1235864797, 1235864799, 1235864796, 1235864794, 1235864797],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107635077,
    center: {
      lat: 43.5243426,
      lon: -5.6316157,
    },
    nodes: [
      1236685153, 1236685135, 1236684926, 1236684955, 1236685121, 1236685153,
    ],
    tags: {
      leisure: "pitch",
      name: "Instalaciones deportivas universitarias",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107900686,
    center: {
      lat: 42.357787,
      lon: -3.6663331,
    },
    nodes: [1239172138, 1239172141, 1239172143, 1239172136, 1239172138],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107901746,
    center: {
      lat: 42.3601144,
      lon: -3.6721658,
    },
    nodes: [1239186377, 1239186375, 1239186388, 1239186385, 1239186377],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 107911352,
    center: {
      lat: 41.9415451,
      lon: -7.4120165,
    },
    nodes: [1239277345, 1239277299, 1239277223, 1239277394, 1239277345],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 108338192,
    center: {
      lat: 41.6414013,
      lon: -0.9024704,
    },
    nodes: [1243299385, 1243299379, 1243299390, 1243299373, 1243299385],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 108725218,
    center: {
      lat: 28.0909797,
      lon: -16.7354093,
    },
    nodes: [1246627161, 1246627152, 1246627154, 1246627156, 1246627161],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "artificial_turf",
    },
  },
  {
    type: "way",
    id: 108941305,
    center: {
      lat: 39.5761698,
      lon: 2.6232684,
    },
    nodes: [1248625779, 1248624767, 1248625281, 1248625682, 1248625779],
    tags: {
      courts: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 109152064,
    center: {
      lat: 41.8019747,
      lon: -0.8148285,
    },
    nodes: [1250343589, 1250343597, 1250343585, 1250343584, 1250343589],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 109191089,
    center: {
      lat: 28.4120818,
      lon: -16.3341448,
    },
    nodes: [1250629309, 1250629234, 1250629325, 1250629368, 1250629309],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 109329777,
    center: {
      lat: 40.410815,
      lon: -3.6166734,
    },
    nodes: [1251886568, 1251886442, 1251886519, 1251886545, 1251886568],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 109329779,
    center: {
      lat: 40.4110766,
      lon: -3.6168704,
    },
    nodes: [1251886463, 1251886541, 1251886544, 1251886497, 1251886463],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 109783488,
    center: {
      lat: 28.2135048,
      lon: -16.7765546,
    },
    nodes: [1255788926, 1255788908, 1255788922, 1255788916, 1255788926],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 110040248,
    center: {
      lat: 37.1987383,
      lon: -4.0528872,
    },
    nodes: [1258149490, 1258149484, 1258149463, 1258149438, 1258149490],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 110224344,
    center: {
      lat: 28.2888804,
      lon: -16.3799625,
    },
    nodes: [1259383751, 1259383855, 5785270581, 5785270582, 1259383751],
    tags: {
      access: "customers",
      leisure: "pitch",
      location: "roof",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 110771388,
    center: {
      lat: 28.1150368,
      lon: -16.7310541,
    },
    nodes: [1264079840, 1264079923, 1264080548, 1264080434, 1264079840],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 111286616,
    center: {
      lat: 41.6408155,
      lon: -0.9036434,
    },
    nodes: [1268294750, 1268294915, 1268294818, 1268294686, 1268294750],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 111286623,
    center: {
      lat: 41.6409821,
      lon: -0.9034933,
    },
    nodes: [1268294760, 1268294929, 1268294771, 1268294840, 1268294760],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 111472978,
    center: {
      lat: 40.3906654,
      lon: -3.6332734,
    },
    nodes: [1269959932, 1269959776, 1269959309, 1269959653, 1269959932],
    tags: {
      access: "yes",
      fee: "no",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 111626500,
    center: {
      lat: 41.6645202,
      lon: -3.6900946,
    },
    nodes: [1271274993, 1271274640, 1271274812, 1271275061, 1271274993],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 111860701,
    center: {
      lat: 41.4472091,
      lon: 2.2266515,
    },
    nodes: [
      1273518094, 3915227401, 1273517968, 1273518025, 1273518063, 1273518098,
      1273518016, 1273518094,
    ],
    tags: {
      "addr:city": "Badalona",
      "addr:postcode": "08917",
      "addr:street": "Carrer de Pere Martell",
      leisure: "pitch",
      name: "Pistes bàsquet Pere Martell",
      nohousenumber: "yes",
      "panoramax:1": "fccb3e00-601f-4114-9d8c-c0768597a842",
      "panoramax:3": "4071fe15-bfa2-47fc-8637-838d5bd4bffc",
      "panoramax:4": "b814c39a-d82d-4354-b06e-f3fc042c5af5",
      "panoramax:6": "7d9eb2ae-530f-475d-a949-d5860fbcf014",
      "panoramax:7": "a0d0412d-e564-44f1-ba48-7fafa17d06c6",
      "panoramax:8": "cd5b6da5-a0ee-41f1-be64-617aac2f3c50",
      "panoramax:9": "0208202a-bdd5-4ba9-a193-ded1dab8661a",
      phone: "+34934832600",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 112163062,
    center: {
      lat: 41.5411531,
      lon: 2.4309018,
    },
    nodes: [1275735224, 1275735270, 1275735194, 1275735239, 1275735224],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 112587678,
    center: {
      lat: 36.7422216,
      lon: -4.4243181,
    },
    nodes: [1279325269, 1279325272, 1279325317, 1279325285, 1279325269],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 112827315,
    center: {
      lat: 38.3401139,
      lon: -0.5093173,
    },
    nodes: [1281672385, 1281672485, 1281672247, 1281672444, 1281672385],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 112916098,
    center: {
      lat: 28.4371463,
      lon: -16.3085403,
    },
    nodes: [1282218054, 1282218122, 1282218309, 1282218229, 1282218054],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 112916154,
    center: {
      lat: 28.4370062,
      lon: -16.3087745,
    },
    nodes: [1282218397, 1282218482, 1282218169, 1282218097, 1282218397],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 113302807,
    center: {
      lat: 40.4424497,
      lon: -3.4702724,
    },
    nodes: [1285223078, 1285223145, 1285222851, 1285223228, 1285223078],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 113302825,
    center: {
      lat: 40.4426276,
      lon: -3.4699124,
    },
    nodes: [1285223254, 1285222940, 1285223260, 1285222961, 1285223254],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 113302835,
    center: {
      lat: 40.4427553,
      lon: -3.4707485,
    },
    nodes: [1285223043, 1285222904, 1285223138, 1285223187, 1285223043],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 113302840,
    center: {
      lat: 40.4425392,
      lon: -3.4700898,
    },
    nodes: [1285223010, 1285223249, 1285223317, 1285222995, 1285223010],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 113431945,
    center: {
      lat: 42.8925954,
      lon: -8.5454119,
    },
    nodes: [
      1122620722, 9651962247, 1122620939, 1122621105, 1122621025, 1122620722,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 113621457,
    center: {
      lat: 40.9930296,
      lon: -5.6547202,
    },
    nodes: [1288269263, 1288269353, 1288269339, 1288269292, 1288269263],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 114192567,
    center: {
      lat: 38.7790177,
      lon: -0.1102113,
    },
    nodes: [577566444, 577566448, 577566459, 577566442, 577566444],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 114579740,
    center: {
      lat: 38.3674541,
      lon: -0.5005761,
    },
    nodes: [1297563065, 1297563053, 1297562906, 1297562926, 1297563065],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 115321836,
    center: {
      lat: 40.9602981,
      lon: -5.6586021,
    },
    nodes: [1303460170, 1303460092, 1303460189, 1303460105, 1303460170],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 115321840,
    center: {
      lat: 40.9604436,
      lon: -5.6585329,
    },
    nodes: [1303460086, 1303459964, 1303460123, 1303460049, 1303460086],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116218176,
    center: {
      lat: 42.876531,
      lon: -2.6386443,
    },
    nodes: [1310917995, 1310917625, 1310917909, 1310918153, 1310917995],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116221757,
    center: {
      lat: 39.4553657,
      lon: -5.8871497,
    },
    nodes: [1310934432, 1310934435, 1310934425, 1310934430, 1310934432],
    tags: {
      leisure: "pitch",
      source: "PNOA;survey",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116407984,
    center: {
      lat: 41.674948,
      lon: -0.8822607,
    },
    nodes: [1312360422, 1312360775, 1312360466, 1312360597, 1312360422],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 116411498,
    center: {
      lat: 41.6690395,
      lon: -0.8871942,
    },
    nodes: [1312397853, 1312397946, 1312397927, 1312397961, 1312397853],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116606362,
    center: {
      lat: 41.6735854,
      lon: -0.8960896,
    },
    nodes: [1314160375, 1314160409, 1314160602, 1314160388, 1314160375],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116662908,
    center: {
      lat: 42.8881602,
      lon: -2.7272239,
    },
    nodes: [1314652112, 1314651988, 1314651384, 1314651649, 1314652112],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116715833,
    center: {
      lat: 41.3190909,
      lon: 2.0915149,
    },
    nodes: [
      1315119720, 1315119687, 2813033119, 1315119728, 1315119702, 1315119720,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 116867175,
    center: {
      lat: 39.5660355,
      lon: 2.4964604,
    },
    nodes: [
      1316480582, 1316480566, 1316480543, 1316480550, 1316480554, 1316480576,
      1316480582,
    ],
    tags: {
      building: "yes",
      leisure: "pitch",
      source: "ideib WMS;cadastre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116886859,
    center: {
      lat: 42.9272807,
      lon: -3.4824903,
    },
    nodes: [
      1316639155, 1316639162, 1952476529, 1316639138, 1316639101, 1316639155,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116886860,
    center: {
      lat: 42.9265886,
      lon: -3.4833988,
    },
    nodes: [1316639154, 1316639113, 1316639190, 1316639161, 1316639154],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116886865,
    center: {
      lat: 42.9273821,
      lon: -3.4822445,
    },
    nodes: [1316639109, 1316639128, 1316639089, 1316639178, 1316639109],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116889494,
    center: {
      lat: 41.6684029,
      lon: -0.8819383,
    },
    nodes: [1316660875, 1316660874, 1316660854, 1316660855, 1316660875],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116892643,
    center: {
      lat: 41.6721905,
      lon: -0.8825006,
    },
    nodes: [1316679485, 1316679472, 1316679471, 1316679483, 1316679485],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116892648,
    center: {
      lat: 41.6711392,
      lon: -0.8822117,
    },
    nodes: [1316679420, 1316679402, 1316679399, 1316679419, 1316679420],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116892654,
    center: {
      lat: 41.67142,
      lon: -0.882241,
    },
    nodes: [1316679436, 1316679434, 1316679433, 1316679435, 1316679436],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 116892655,
    center: {
      lat: 41.6712869,
      lon: -0.8822431,
    },
    nodes: [1316679432, 1316679429, 1316679427, 1316679430, 1316679432],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 117458524,
    center: {
      lat: 37.3975745,
      lon: -5.9526594,
    },
    nodes: [1323304308, 1323304300, 1323304305, 1323304298, 1323304308],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 117458528,
    center: {
      lat: 37.3981255,
      lon: -5.9532419,
    },
    nodes: [1323304313, 1323304293, 1323304302, 1323304334, 1323304313],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 117933451,
    center: {
      lat: 37.3231249,
      lon: -5.9724373,
    },
    nodes: [
      1327370739, 1327370738, 1327370736, 1327370757, 1327370747, 1327370756,
      1327370739,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 118427677,
    center: {
      lat: 37.4052188,
      lon: -5.9492737,
    },
    nodes: [1332090346, 1332090408, 1332090405, 1332090354, 1332090346],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 118689406,
    center: {
      lat: 41.3518551,
      lon: 2.0862351,
    },
    nodes: [1334333861, 1334333882, 1334333879, 1334333888, 1334333861],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 118854190,
    center: {
      lat: 40.2987314,
      lon: -3.7660172,
    },
    nodes: [1336027229, 1336027540, 1336027646, 1336027259, 1336027229],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 118854195,
    center: {
      lat: 40.298383,
      lon: -3.7663588,
    },
    nodes: [1336027492, 1336027291, 1336027414, 1336027525, 1336027492],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 118854197,
    center: {
      lat: 40.2988556,
      lon: -3.76661,
    },
    nodes: [1336027322, 1336027604, 1336027426, 1336027220, 1336027322],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 119181098,
    center: {
      lat: 40.4253758,
      lon: -3.7245602,
    },
    nodes: [1339844688, 1339844311, 1339844534, 1339844746, 1339844688],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 119784428,
    center: {
      lat: 41.6771862,
      lon: -0.8844268,
    },
    nodes: [1344923611, 1344923609, 1344923603, 1344923608, 1344923611],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 119908886,
    center: {
      lat: 41.6701396,
      lon: -0.8870129,
    },
    nodes: [1345708209, 1345708210, 1345708197, 1345708196, 1345708209],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120344518,
    center: {
      lat: 41.0760284,
      lon: 1.1328333,
    },
    nodes: [1349563409, 1349563411, 1349563028, 1349562990, 1349563409],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120517399,
    center: {
      lat: 37.4110548,
      lon: -5.9939523,
    },
    nodes: [1351222637, 1351222389, 1351222654, 1351222549, 1351222637],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120569215,
    center: {
      lat: 38.8623982,
      lon: -7.0011412,
    },
    nodes: [1351640494, 1351640422, 1351640497, 1351640467, 1351640494],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120580688,
    center: {
      lat: 38.8876712,
      lon: -6.9866497,
    },
    nodes: [1351705195, 1351705164, 1351705131, 1351705192, 1351705195],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120581126,
    center: {
      lat: 38.8739938,
      lon: -6.9836893,
    },
    nodes: [
      5441225923, 5441225399, 1351709615, 1351709566, 1351709556, 5441225400,
      5441225923,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120674914,
    center: {
      lat: 41.9677152,
      lon: 2.7896529,
    },
    nodes: [1352485214, 1352485272, 1352485262, 1352485233, 1352485214],
    tags: {
      access: "private",
      leisure: "pitch",
      source: "PNOA",
      "source:date": "7/7/2011",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120676749,
    center: {
      lat: 38.3469937,
      lon: -0.5003536,
    },
    nodes: [1352506024, 1352506021, 1352506010, 1352506037, 1352506024],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 120708861,
    center: {
      lat: 37.1989305,
      lon: -3.6203863,
    },
    nodes: [1352748472, 1352748606, 1352748214, 1352748357, 1352748472],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 120708862,
    center: {
      lat: 37.197374,
      lon: -3.6197402,
    },
    nodes: [
      1352748581, 1352748585, 1352748455, 5491428699, 1352748456, 1352748581,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 120928597,
    center: {
      lat: 41.6378824,
      lon: -0.9056559,
    },
    nodes: [1354699335, 1354699349, 1354699334, 1354699327, 1354699335],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 120928598,
    center: {
      lat: 41.6374504,
      lon: -0.9048387,
    },
    nodes: [1354699317, 1354699322, 1354699316, 1354699311, 1354699317],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 120928599,
    center: {
      lat: 41.6375875,
      lon: -0.9050436,
    },
    nodes: [1354699321, 1354699318, 1354699324, 1354699325, 1354699321],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 120928600,
    center: {
      lat: 41.6379941,
      lon: -0.9058536,
    },
    nodes: [1354699342, 1354699333, 1354699355, 1354699358, 1354699342],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 120939234,
    center: {
      lat: 40.3757648,
      lon: -3.6856357,
    },
    nodes: [
      1354800790, 1354800792, 1354800786, 4254265893, 1354800785, 1354800790,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 121098553,
    center: {
      lat: 40.3969779,
      lon: -3.7580239,
    },
    nodes: [
      1356384809, 1356384810, 1356384815, 1356384814, 1356384813, 1356384812,
      1356384806, 1356384807, 1356384809,
    ],
    tags: {
      barrier: "fence",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 121098560,
    center: {
      lat: 40.3728807,
      lon: -3.7355299,
    },
    nodes: [
      1356384446, 1356384477, 1356384479, 1356384480, 1356384447, 1356384446,
    ],
    tags: {
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 121189303,
    center: {
      lat: 41.4177673,
      lon: 2.151815,
    },
    nodes: [1357271809, 1357271835, 1357271803, 1357271807, 1357271809],
    tags: {
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 121545500,
    center: {
      lat: 39.5718146,
      lon: 2.6023544,
    },
    nodes: [1360429361, 1360429214, 1360429398, 1360429565, 1360429361],
    tags: {
      leisure: "pitch",
      source: "cadastre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 121852543,
    center: {
      lat: 37.1502954,
      lon: -3.6037675,
    },
    nodes: [1363052047, 1363052002, 1363051984, 1363052003, 1363052047],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 122057691,
    center: {
      lat: 40.4305069,
      lon: -3.7259717,
    },
    nodes: [1364771777, 1364771749, 1364771776, 1364771786, 1364771777],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 122412434,
    center: {
      lat: 41.5095988,
      lon: -5.7564666,
    },
    nodes: [1368001925, 1368001948, 1368001931, 1368001921, 1368001925],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 122419125,
    center: {
      lat: 41.5155348,
      lon: -5.7316556,
    },
    nodes: [1368064622, 1368064617, 1368064672, 1368064634, 1368064622],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 122834914,
    center: {
      lat: 41.9782936,
      lon: 2.7931782,
    },
    nodes: [1371425094, 1371425078, 1371425106, 1371425067, 1371425094],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "23/7/2011",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123113785,
    center: {
      lat: 38.2726878,
      lon: -0.675476,
    },
    nodes: [1373952829, 1373952825, 1373952827, 1373952830, 1373952829],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123113792,
    center: {
      lat: 38.2729982,
      lon: -0.6756446,
    },
    nodes: [1373952832, 1373952831, 1373952834, 1373952836, 1373952832],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123157167,
    center: {
      lat: 42.6054003,
      lon: -2.8355276,
    },
    nodes: [1374288117, 1374288118, 1374288116, 1374288110, 1374288117],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123157170,
    center: {
      lat: 42.6062549,
      lon: -2.8357596,
    },
    nodes: [1374288157, 1374288160, 1374288152, 1374288150, 1374288157],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123157175,
    center: {
      lat: 42.6051808,
      lon: -2.8356332,
    },
    nodes: [1374288105, 1374288108, 1374288094, 1374288090, 1374288105],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123158691,
    center: {
      lat: 41.38023,
      lon: 2.0982122,
    },
    nodes: [1374302558, 1374302546, 1374302536, 1374302543, 1374302558],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 123568534,
    center: {
      lat: 37.153469,
      lon: -3.5940988,
    },
    nodes: [
      1377506126, 10196591088, 10196591087, 1377506088, 10196591084,
      10196591083, 1377506089, 10196591081, 1645676715, 10196796130, 5936220850,
      1377506071, 1377506087, 10196591069, 10196591068, 10196591067,
      10196796128, 10196796126, 10196796127, 10196796129, 10196591063,
      10196591062, 10196591061, 1377506163, 1377506154, 5936220849, 10196796131,
      1645676702, 1377506117, 1377506167, 1377506161, 1377506128, 5936220859,
      5936220879, 5936220877, 5936220875, 5936220873, 5936220871, 1377506126,
    ],
    tags: {
      "addr:city": "Granada",
      "addr:postcode": "18007",
      "addr:street": "Paseo del Emperador Carlos V",
      building: "sports_hall",
      capacity: "9507",
      heritage: "3",
      "heritage:operator": "iaph",
      "historic:period": "modern",
      leisure: "sports_hall",
      name: "Palacio Municipal de Deportes de Granada",
      sport: "basketball",
      start_date: "1991",
      wheelchair: "yes",
      wikidata: "Q6594241",
      wikipedia: "es:Palacio Municipal de Deportes de Granada",
    },
  },
  {
    type: "way",
    id: 124101166,
    center: {
      lat: 42.8375126,
      lon: -2.6940172,
    },
    nodes: [1382132170, 1382132172, 1382132174, 1382132189, 1382132170],
    tags: {
      access: "private",
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 124733329,
    center: {
      lat: 28.5471942,
      lon: -16.2972877,
    },
    nodes: [1387417715, 1387418416, 1387416938, 1387418049, 1387417715],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 125201396,
    center: {
      lat: 41.4746081,
      lon: 2.0662258,
    },
    nodes: [1391194476, 1391194745, 1391194810, 1391194576, 1391194476],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 125204357,
    center: {
      lat: 41.4728155,
      lon: 2.0779458,
    },
    nodes: [
      1391222839, 1391222582, 1391222731, 1391222671, 1391222700, 1391222552,
      1391222711, 1391222715, 1391222822, 3766994646, 1391222837, 1391222683,
      1391222586, 1391222818, 1391222743, 1391222675, 3766994657, 1395157420,
      1391222839,
    ],
    tags: {
      barrier: "retaining_wall",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 125417182,
    center: {
      lat: 41.5930001,
      lon: 2.2889893,
    },
    nodes: [1393042429, 1393042428, 1393042421, 1393042423, 1393042429],
    tags: {
      comment: "There are no markings on the ground, but the hoops are there.",
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 125417183,
    center: {
      lat: 41.592995,
      lon: 2.2892931,
    },
    nodes: [1393042427, 1393042426, 1393042418, 1393042419, 1393042427],
    tags: {
      comment: "There are no markings on the ground, but the hoops are there.",
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 125436353,
    center: {
      lat: 41.6011714,
      lon: 2.2857608,
    },
    nodes: [1393197633, 1393197634, 1393197629, 1393197628, 1393197633],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 125667239,
    center: {
      lat: 41.461152,
      lon: 2.0911618,
    },
    nodes: [1395199160, 1395199098, 1395199094, 1395199095, 1395199160],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 125694103,
    center: {
      lat: 41.4911802,
      lon: 2.0621928,
    },
    nodes: [
      1395425089, 1395432172, 1395432053, 1395432456, 1395432223, 1395425089,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      "toilets:wheelchair": "yes",
      wheelchair: "yes",
    },
  },
  {
    type: "way",
    id: 125910453,
    center: {
      lat: 41.4842776,
      lon: 2.0818904,
    },
    nodes: [1397148504, 1397148543, 1397148534, 1397148488, 1397148504],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 126095515,
    center: {
      lat: 41.4908677,
      lon: 2.0725677,
    },
    nodes: [1398767907, 1398767963, 1398768023, 1398768065, 1398767907],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 126846935,
    center: {
      lat: 41.5853503,
      lon: 2.5497584,
    },
    nodes: [1405044174, 1405044179, 1405044168, 1405044160, 1405044174],
    tags: {
      leisure: "pitch",
      name: "Pista esportiva",
      "name:ca": "Pista esportiva",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 127271740,
    center: {
      lat: 41.6091195,
      lon: -4.7473553,
    },
    nodes: [
      1409110136, 1409110164, 12800881462, 1409110119, 1409110155, 1409110136,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 127271741,
    center: {
      lat: 41.6089611,
      lon: -4.747364,
    },
    nodes: [1409110117, 1409110134, 1409110182, 1409110146, 1409110117],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 127623172,
    center: {
      lat: 42.8166774,
      lon: -1.6589539,
    },
    nodes: [1412059710, 1412059712, 1412059696, 1412059694, 1412059710],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 127623182,
    center: {
      lat: 42.8177157,
      lon: -1.6547169,
    },
    nodes: [
      1412059783, 12623300183, 1412059784, 1412059754, 1412059753, 12623300184,
      1412059783,
    ],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 127623189,
    center: {
      lat: 42.8166557,
      lon: -1.6591411,
    },
    nodes: [1412059708, 1412059709, 1412059693, 1412059692, 1412059708],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128195183,
    center: {
      lat: 42.8351823,
      lon: -2.6896829,
    },
    nodes: [1417161757, 1417161763, 1417161762, 1417161751, 1417161757],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128195184,
    center: {
      lat: 42.8349646,
      lon: -2.6899224,
    },
    nodes: [1417161735, 1417161755, 1417161749, 1417161733, 1417161735],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128321322,
    center: {
      lat: 40.4074439,
      lon: -3.7507542,
    },
    nodes: [1418406445, 1418406439, 1418406435, 1418406452, 1418406445],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128529568,
    center: {
      lat: 40.369027,
      lon: -3.6958426,
    },
    nodes: [3383582983, 3383582982, 1420240425, 1420240761, 3383582983],
    tags: {
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128564998,
    center: {
      lat: 40.4024488,
      lon: -3.7444637,
    },
    nodes: [1420451312, 1420451314, 1420451316, 1420451306, 1420451312],
    tags: {
      access: "yes",
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 128608370,
    center: {
      lat: 28.4265341,
      lon: -16.3061538,
    },
    nodes: [1420780505, 1420780506, 1420780515, 1420780514, 1420780505],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128608371,
    center: {
      lat: 28.4265311,
      lon: -16.306026,
    },
    nodes: [
      1420780501, 5519225978, 1420780503, 1420780513, 1420780512, 1420780501,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128608375,
    center: {
      lat: 28.4265206,
      lon: -16.3058535,
    },
    nodes: [1420780497, 1420780507, 1420780511, 1420780508, 1420780497],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128854949,
    center: {
      lat: 42.327843,
      lon: -3.6649187,
    },
    nodes: [1422809058, 1422808936, 1422808643, 1422809225, 1422809058],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 128854965,
    center: {
      lat: 42.3277784,
      lon: -3.6651852,
    },
    nodes: [1422808850, 1422809171, 1422808611, 1422809002, 1422808850],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 129014725,
    center: {
      lat: 41.6227591,
      lon: -0.9218322,
    },
    nodes: [
      1424278930, 1424278928, 10637533342, 1424278923, 1424278925, 1424278930,
    ],
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 129219282,
    center: {
      lat: 40.9624426,
      lon: -5.6523423,
    },
    nodes: [
      1426117695, 1426117670, 2919871309, 2919871303, 1426117726, 2919871291,
      2919871300, 1426117773, 2919871321, 2919871326, 1426117695,
    ],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 129263622,
    center: {
      lat: 40.4085843,
      lon: -3.7435284,
    },
    nodes: [1426535834, 1426535823, 1426535851, 1426535830, 1426535834],
    tags: {
      leisure: "track",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 130096295,
    center: {
      lat: 28.4446383,
      lon: -16.3033135,
    },
    nodes: [1433943199, 1433943294, 1433943281, 1433943258, 1433943199],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 130174981,
    center: {
      lat: 41.3522327,
      lon: -1.6250351,
    },
    nodes: [1434771526, 1434771544, 1434771496, 1434771490, 1434771526],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 130452940,
    center: {
      lat: 40.4539745,
      lon: -3.450009,
    },
    nodes: [1436871911, 1436871945, 1436871959, 1436871933, 1436871911],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 130452941,
    center: {
      lat: 40.4538041,
      lon: -3.4500869,
    },
    nodes: [1436871933, 1436871911, 1436871882, 1436871899, 1436871933],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      "source:date": "2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 130699386,
    center: {
      lat: 42.2218656,
      lon: -8.7098477,
    },
    nodes: [1438721985, 1438721983, 1438721996, 1438721993, 1438721985],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 130699388,
    center: {
      lat: 42.2214982,
      lon: -8.7094848,
    },
    nodes: [1438721987, 1438721994, 1438721998, 1438721988, 1438721987],
    tags: {
      covered: "yes",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131193853,
    center: {
      lat: 41.6116713,
      lon: -4.6819537,
    },
    nodes: [1444401158, 1444401155, 1444401157, 1444401159, 1444401158],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131343864,
    center: {
      lat: 41.3809187,
      lon: 2.0512112,
    },
    nodes: [
      1445736222, 4615765258, 4615765257, 4615765256, 4615765259, 4615765255,
      4615765254, 1445736220, 1445736227, 1445736229, 4615765260, 4615765261,
      1445736222,
    ],
    tags: {
      "addr:postcode": "08980",
      "addr:street": "Santiago Rusinyol",
      building: "yes",
      leisure: "sports_centre",
      name: "Palau Municipal d'Esports Juan Carlos Navarro",
      "name:ca": "Palau Municipal d'Esports Juan Carlos Navarro",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131440797,
    center: {
      lat: 42.2038653,
      lon: -3.9855312,
    },
    nodes: [1446558349, 1446557729, 1446558294, 1446558107, 1446558349],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131477694,
    center: {
      lat: 42.5930015,
      lon: -5.5587035,
    },
    nodes: [1446886793, 1446886914, 1446886896, 1446886847, 1446886793],
    tags: {
      leisure: "pitch",
      source: "Microsoft Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131503759,
    center: {
      lat: 42.5974977,
      lon: -5.5647341,
    },
    nodes: [
      1447176934, 1447176930, 1447176932, 1447176970, 7529792418, 1447176934,
    ],
    tags: {
      barrier: "fence",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131634338,
    center: {
      lat: 41.6460326,
      lon: -4.7361475,
    },
    nodes: [6806448919, 1448522055, 1448522047, 6806448918, 6806448919],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 131974387,
    center: {
      lat: 28.5198097,
      lon: -16.3304828,
    },
    nodes: [1452045835, 1452045966, 1452045855, 1452045847, 1452045835],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 131974391,
    center: {
      lat: 28.5196281,
      lon: -16.3304941,
    },
    nodes: [1452045853, 1452045906, 1452045830, 1452045930, 1452045853],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 131998637,
    center: {
      lat: 28.1195789,
      lon: -15.4233672,
    },
    nodes: [1452375313, 1452375311, 1452375312, 1452363136, 1452375313],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 131998640,
    center: {
      lat: 28.1198257,
      lon: -15.423509,
    },
    nodes: [2059104559, 1452375298, 1452375295, 1452375316, 2059104559],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132000826,
    center: {
      lat: 28.119721,
      lon: -15.4234159,
    },
    nodes: [2059104557, 1452381735, 1452381733, 1452381729, 2059104557],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132368166,
    center: {
      lat: 40.4479559,
      lon: -3.4649598,
    },
    nodes: [1456197860, 1456197852, 1456197858, 1456197870, 1456197860],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132618998,
    center: {
      lat: 40.3995811,
      lon: -3.6078653,
    },
    nodes: [1458621001, 1458621005, 1458621003, 1458621000, 1458621001],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132637349,
    center: {
      lat: 40.4019493,
      lon: -3.5973118,
    },
    nodes: [1458909708, 1458909709, 1458909705, 1458909704, 1458909708],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132643754,
    center: {
      lat: 40.4113512,
      lon: -3.6120728,
    },
    nodes: [1459001127, 1459001130, 1459001123, 1459001119, 1459001127],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132643755,
    center: {
      lat: 40.409852,
      lon: -3.6084859,
    },
    nodes: [1459001101, 1459001098, 1459001094, 1459001097, 1459001101],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132660070,
    center: {
      lat: 43.2568218,
      lon: -2.8981204,
    },
    nodes: [1459233422, 1459233420, 1459233414, 1459233416, 1459233422],
    tags: {
      leisure: "pitch",
      name: "Makaldi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 132844438,
    center: {
      lat: 40.5640803,
      lon: -3.2679573,
    },
    nodes: [1461515534, 1461515504, 1461515499, 1461515529, 1461515534],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 133078216,
    center: {
      lat: 42.340327,
      lon: -3.6491893,
    },
    nodes: [
      1464311989, 11812683866, 11812683865, 1464312001, 11812683867,
      11812683868, 1464311995, 11812699269, 1464311994, 11812699270, 1464312000,
      1464311998, 11812683863, 11812683864, 11812683862, 1464311992,
      11812683861, 1464311987, 11812683860, 1464311990, 11812683859, 1464311997,
      1464311989,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 133108517,
    center: {
      lat: 40.4278055,
      lon: -3.556041,
    },
    nodes: [1464595818, 1464595808, 1464595802, 1464595814, 1464595818],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 133134873,
    center: {
      lat: 40.4239247,
      lon: -3.5597092,
    },
    nodes: [1464935267, 1464935254, 1464935250, 1464935262, 1464935267],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 133284252,
    center: {
      lat: 40.4268948,
      lon: -3.5582296,
    },
    nodes: [1467037551, 1467037526, 1467037520, 1467037545, 1467037551],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 133284253,
    center: {
      lat: 40.426875,
      lon: -3.558119,
    },
    nodes: [1467037542, 1467037518, 1467037509, 1467037538, 1467037542],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 133539949,
    center: {
      lat: 40.4272931,
      lon: -3.5409628,
    },
    nodes: [1469868390, 1469868419, 1469868377, 1469868368, 1469868390],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 133539950,
    center: {
      lat: 40.4273982,
      lon: -3.5410065,
    },
    nodes: [1469868425, 1469868450, 1469868422, 1469868403, 1469868425],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 133979780,
    center: {
      lat: 40.3963543,
      lon: -3.6924824,
    },
    nodes: [1474148271, 1474148269, 1474148261, 1474148262, 1474148271],
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      lit: "no",
      name: "Instalación Deportiva Municipal Básica Juan de Vera",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 134548033,
    center: {
      lat: 42.3215933,
      lon: 2.3462312,
    },
    nodes: [5411764335, 1479167017, 1479167026, 5411764339, 5411764335],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135033776,
    center: {
      lat: 41.3592525,
      lon: 2.0638404,
    },
    nodes: [1483524627, 1483524631, 1483524633, 1483524628, 1483524627],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135081241,
    center: {
      lat: 41.3864068,
      lon: 2.1221347,
    },
    nodes: [1483892082, 1483892321, 1483892138, 1483892046, 1483892082],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 135182779,
    center: {
      lat: 42.0301867,
      lon: 0.1338519,
    },
    nodes: [1484821529, 1484821514, 1484821509, 1484821523, 1484821529],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135182792,
    center: {
      lat: 42.0303048,
      lon: 0.133983,
    },
    nodes: [1484821530, 1484821531, 1484821528, 1484821515, 1484821530],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135228517,
    center: {
      lat: 40.3263434,
      lon: -1.0944898,
    },
    nodes: [1485252929, 1485252926, 1485252927, 1485252930, 1485252929],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135228772,
    center: {
      lat: 40.3288577,
      lon: -1.0946651,
    },
    nodes: [1485255706, 1485255709, 1485255707, 1485255705, 1485255706],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135228774,
    center: {
      lat: 40.3290667,
      lon: -1.09409,
    },
    nodes: [1485255710, 1485255708, 1485254331, 1485255711, 1485255710],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135264893,
    center: {
      lat: 42.033481,
      lon: 0.1225028,
    },
    nodes: [1485664166, 1485664138, 1485664143, 1485664168, 1485664166],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 135456071,
    center: {
      lat: 42.8175883,
      lon: -1.6106425,
    },
    nodes: [1487690513, 1487690515, 1487690512, 1487690514, 1487690513],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 135519141,
    center: {
      lat: 40.3909149,
      lon: -3.7052208,
    },
    nodes: [1488443616, 1488443614, 1488443615, 1488443617, 1488443616],
    tags: {
      access: "yes",
      "addr:city": "Madrid",
      "addr:housenumber": "4",
      "addr:postcode": "28026",
      "addr:street": "Calle de las Calesas",
      hoops: "2",
      leisure: "pitch",
      name: "Instalación Deportiva Municipal Básica Plaza Vallandes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135652740,
    center: {
      lat: 40.4576456,
      lon: -3.65359,
    },
    nodes: [1489535550, 1489535546, 1489535542, 1489535548, 1489535550],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135661688,
    center: {
      lat: 28.3272385,
      lon: -14.0464192,
    },
    nodes: [1489602559, 1489602557, 1489602553, 1489602554, 1489602559],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135661690,
    center: {
      lat: 28.3731341,
      lon: -14.0339099,
    },
    nodes: [1489602897, 1489602895, 1489602884, 1489602887, 1489602897],
    tags: {
      leisure: "pitch",
      source: "GRAFCAN OrtoExpress Urbana 2009",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 135674244,
    center: {
      lat: 40.3923684,
      lon: -3.7060975,
    },
    nodes: [1489722937, 1489722887, 1489722917, 1489722891, 1489722937],
    tags: {
      access: "yes",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 136024105,
    center: {
      lat: 40.4384493,
      lon: -3.6075949,
    },
    nodes: [1492770457, 1492770453, 1492770455, 1492770458, 1492770457],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136024107,
    center: {
      lat: 40.4383627,
      lon: -3.6078655,
    },
    nodes: [1492770456, 1492770452, 1492770451, 1492770454, 1492770456],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136110406,
    center: {
      lat: 41.624453,
      lon: -0.884919,
    },
    nodes: [1493547450, 1493547451, 1493547431, 1493547430, 1493547450],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136317224,
    center: {
      lat: 38.0141686,
      lon: -1.0917731,
    },
    nodes: [1495496096, 1495496090, 1495496085, 1495496088, 1495496096],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 136417503,
    center: {
      lat: 41.6374742,
      lon: -0.9083427,
    },
    nodes: [1496408732, 1496408728, 1496408717, 1496408723, 1496408732],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136417504,
    center: {
      lat: 41.6373897,
      lon: -0.9100852,
    },
    nodes: [1496408719, 1496408713, 1496408724, 1496408729, 1496408719],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136417506,
    center: {
      lat: 41.6375243,
      lon: -0.9091981,
    },
    nodes: [1496408721, 1496408725, 1496408733, 1496408731, 1496408721],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136687476,
    center: {
      lat: 41.7958941,
      lon: -1.2135892,
    },
    nodes: [1499486770, 1499486762, 1499486764, 1499486786, 1499486770],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136689264,
    center: {
      lat: 41.8243293,
      lon: -4.6479798,
    },
    nodes: [1499503210, 1499503207, 1499503208, 1499503211, 1499503210],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136938755,
    center: {
      lat: 41.6249464,
      lon: -0.8771306,
    },
    nodes: [1502263578, 1502263571, 1502263569, 1502263577, 1502263578],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 136987880,
    center: {
      lat: 42.4763206,
      lon: -5.3601582,
    },
    nodes: [1502775259, 1502775258, 1502775253, 1502775255, 1502775259],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 137474016,
    center: {
      lat: 28.0838695,
      lon: -16.7349008,
    },
    nodes: [1507877111, 1507877107, 1507877071, 1507877090, 1507877111],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 137822515,
    center: {
      lat: 43.0848322,
      lon: -2.3160552,
    },
    nodes: [
      1511405022, 1511405021, 2098510565, 2098510564, 2098510567, 2098510568,
      2098510569, 2098510571, 2098510573, 1511405023, 1511405024, 1511405022,
    ],
    tags: {
      leisure: "pitch",
      name: "Izazpi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138099513,
    center: {
      lat: 38.3746375,
      lon: -0.4778653,
    },
    nodes: [1513972495, 1513972521, 1513972523, 1513972515, 1513972495],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138104286,
    center: {
      lat: 40.3981378,
      lon: -3.7650653,
    },
    nodes: [1514044520, 1514044525, 1514044531, 1514044522, 1514044520],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138177797,
    center: {
      lat: 41.5225635,
      lon: 2.1802497,
    },
    nodes: [1514654478, 1514654465, 1514654484, 1514654467, 1514654478],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138221971,
    center: {
      lat: 42.7897675,
      lon: -9.0643559,
    },
    nodes: [1515228036, 1515228040, 1515228027, 1515228024, 1515228036],
    tags: {
      access: "private",
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138221972,
    center: {
      lat: 42.7896588,
      lon: -9.0643323,
    },
    nodes: [1515228023, 1515228025, 1515228022, 1515228021, 1515228023],
    tags: {
      access: "private",
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138257723,
    center: {
      lat: 42.7896783,
      lon: -9.0623429,
    },
    nodes: [1515734741, 1515734711, 1515734708, 1515734724, 1515734741],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 138755208,
    center: {
      lat: 40.3890231,
      lon: -3.7631334,
    },
    nodes: [
      1521546662, 1521546660, 1521546663, 5075646159, 1521546665, 1521546662,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 139852780,
    center: {
      lat: 41.664497,
      lon: -0.8813613,
    },
    nodes: [1532731721, 1532731690, 1532731689, 1532731719, 1532731721],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 139852784,
    center: {
      lat: 41.6645202,
      lon: -0.8816141,
    },
    nodes: [1532731724, 1532731694, 1532731691, 1532731722, 1532731724],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 139962532,
    center: {
      lat: 38.9933997,
      lon: -1.8438532,
    },
    nodes: [1533734381, 1533734364, 1533734365, 1533734358, 1533734381],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140412000,
    center: {
      lat: 42.6126025,
      lon: -7.7736081,
    },
    nodes: [1538402571, 1538402572, 1538402570, 1538402573, 1538402571],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140458187,
    center: {
      lat: 40.0713437,
      lon: -2.1513758,
    },
    nodes: [1538833984, 1538833986, 1538833981, 1538833978, 1538833984],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140458188,
    center: {
      lat: 40.0712738,
      lon: -2.1515894,
    },
    nodes: [1538833982, 1538833983, 1538833976, 1538833968, 1538833982],
    tags: {
      leisure: "pitch",
      source: "Bing",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140518715,
    center: {
      lat: 43.0091003,
      lon: -7.5604441,
    },
    nodes: [1539496393, 1539496399, 1539496389, 1539496376, 1539496393],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140518718,
    center: {
      lat: 43.0087075,
      lon: -7.5603337,
    },
    nodes: [1539496344, 1539496315, 1539496338, 1539496366, 1539496344],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140518719,
    center: {
      lat: 43.0089697,
      lon: -7.5603911,
    },
    nodes: [1539496375, 1539496373, 1539496374, 1539496385, 1539496375],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140560812,
    center: {
      lat: 38.3719911,
      lon: -0.4752183,
    },
    nodes: [1539778206, 1539778224, 1539778226, 1539778210, 1539778206],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140679838,
    center: {
      lat: 40.4009596,
      lon: -3.6129691,
    },
    nodes: [1540728619, 1540728629, 1540728617, 1540728614, 1540728619],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140695271,
    center: {
      lat: 36.7407856,
      lon: -4.4258333,
    },
    nodes: [1540967533, 1540967498, 1540967496, 1540967530, 1540967533],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140747765,
    center: {
      lat: 28.0886561,
      lon: -16.7273056,
    },
    nodes: [1541304985, 1541304976, 1541304952, 1541304963, 1541304985],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 140955696,
    center: {
      lat: 43.3459595,
      lon: -1.8023221,
    },
    nodes: [1543096307, 1543096324, 1543096308, 1543096311, 1543096307],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 141319728,
    center: {
      lat: 39.0064527,
      lon: -1.8765866,
    },
    nodes: [1546999356, 1546999357, 1546999358, 1546999360, 1546999356],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 141383749,
    center: {
      lat: 39.6846159,
      lon: 2.8393412,
    },
    nodes: [1547499673, 1547499692, 1547499737, 1547499735, 1547499673],
    tags: {
      leisure: "pitch",
      source: "survey",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 141697993,
    center: {
      lat: 28.4355501,
      lon: -16.3188748,
    },
    nodes: [
      1551041168, 1551041122, 4874933704, 1551041151, 1551041175, 1551041186,
      1551041149, 4874933705, 1551041174, 1551041171, 4874933703, 4874933702,
      4874933701, 1551041168,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 141795964,
    center: {
      lat: 28.4113749,
      lon: -16.5588204,
    },
    nodes: [1552045842, 1552045860, 1552045831, 1552045827, 1552045842],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 141799956,
    center: {
      lat: 41.5662743,
      lon: 2.0282467,
    },
    nodes: [1552089137, 1552089134, 1552089135, 1552089130, 1552089137],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 142112635,
    center: {
      lat: 41.3806721,
      lon: 2.1069105,
    },
    nodes: [1555493340, 1555493293, 1555493316, 1555493312, 1555493340],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 142533536,
    center: {
      lat: 28.1637437,
      lon: -17.197881,
    },
    nodes: [1559822878, 1559822870, 1559822855, 1559822860, 1559822878],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143073695,
    center: {
      lat: 39.006855,
      lon: -1.8825867,
    },
    nodes: [1565647275, 1565647265, 1565647468, 1565647461, 1565647275],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143209365,
    center: {
      lat: 38.987839,
      lon: -1.8684316,
    },
    nodes: [
      1567044419, 1567044337, 1567044371, 1567044497, 1567044388, 1567044419,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143211465,
    center: {
      lat: 43.3042122,
      lon: -3.0386483,
    },
    nodes: [
      1567062225, 2604479556, 1567062204, 1567062206, 1567062193, 1567062225,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 143211486,
    center: {
      lat: 43.3050506,
      lon: -3.0387062,
    },
    nodes: [1567062185, 1567062180, 1567062230, 1567062234, 1567062185],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143308421,
    center: {
      lat: 43.4281806,
      lon: -4.8094118,
    },
    nodes: [1568240704, 1568240707, 1568240711, 1568240701, 1568240704],
    tags: {
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 143447273,
    center: {
      lat: 39.4774491,
      lon: -0.3391283,
    },
    nodes: [253312677, 253312678, 1571653338, 1569622409, 253312677],
    tags: {
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143554187,
    center: {
      lat: 43.3028677,
      lon: -3.0280698,
    },
    nodes: [
      1570923507, 1570923381, 4817687626, 1916878434, 1570923503, 1570923535,
      1570923507,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143563595,
    center: {
      lat: 43.3043937,
      lon: -3.0352766,
    },
    nodes: [1571048597, 1571048648, 1571048578, 1571048574, 1571048597],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 143679229,
    center: {
      lat: 38.9806082,
      lon: -1.8549323,
    },
    nodes: [2887801966, 1572414091, 1572414086, 2887801961, 2887801966],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 144320767,
    center: {
      lat: 42.3329896,
      lon: -3.7079131,
    },
    nodes: [1578648960, 1578648957, 1578648959, 1578648963, 1578648960],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145165360,
    center: {
      lat: 40.3983691,
      lon: -3.6337881,
    },
    nodes: [1585962057, 1585962004, 1585962378, 1585962207, 1585962057],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145169159,
    center: {
      lat: 43.4529668,
      lon: -3.7446269,
    },
    nodes: [1585986405, 1585986366, 1585986404, 1585986403, 1585986405],
    tags: {
      "addr:city": "Somo",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145169163,
    center: {
      lat: 43.4621126,
      lon: -3.7168503,
    },
    nodes: [1585986474, 1585986480, 1585986462, 1585986460, 1585986474],
    tags: {
      leisure: "pitch",
      name: "Pista deportiva",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145204577,
    center: {
      lat: 39.4863176,
      lon: -0.3996245,
    },
    nodes: [1586370473, 1586370421, 1586370419, 1586370417, 1586370473],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145204579,
    center: {
      lat: 39.4863178,
      lon: -0.3993732,
    },
    nodes: [1586370436, 1586370435, 1586370453, 1586370474, 1586370436],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145448074,
    center: {
      lat: 40.4019744,
      lon: -3.6339406,
    },
    nodes: [1588621311, 1588621205, 1588621173, 1588621208, 1588621311],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145502585,
    center: {
      lat: 28.0905844,
      lon: -17.1063802,
    },
    nodes: [1589174914, 1589174912, 1589174910, 1589174911, 1589174914],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145504120,
    center: {
      lat: 28.0946257,
      lon: -17.1094052,
    },
    nodes: [1589200679, 1589200678, 1589200674, 1589200677, 1589200679],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145621562,
    center: {
      lat: 43.290131,
      lon: -2.9973974,
    },
    nodes: [
      1590009780, 1590009812, 1590009778, 1590009798, 1590009769, 1590009780,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145621565,
    center: {
      lat: 43.2903774,
      lon: -2.9975737,
    },
    nodes: [1590009810, 1590009782, 1590009768, 1590009776, 1590009810],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145621566,
    center: {
      lat: 43.2900936,
      lon: -2.99721,
    },
    nodes: [1590009778, 1590009766, 1590009752, 1590009754, 1590009778],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145621567,
    center: {
      lat: 43.2903169,
      lon: -2.9977669,
    },
    nodes: [1590009796, 1590009749, 1590009795, 1590009765, 1590009796],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 145716745,
    center: {
      lat: 42.0537273,
      lon: -3.800193,
    },
    nodes: [1590850266, 1590850212, 1590850186, 1590850248, 1590850266],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146038378,
    center: {
      lat: 37.4368593,
      lon: -1.5030942,
    },
    nodes: [1593382954, 1593382950, 1593382947, 1593382944, 1593382954],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146068924,
    center: {
      lat: 37.4059076,
      lon: -1.5845762,
    },
    nodes: [
      1593553010, 1603516533, 1603516593, 1603516666, 1593552946, 1603516681,
      1603516675, 1593552956, 1603516658, 1603516587, 1603516517, 1593552995,
      1603516509, 1603516511, 1593553010,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146069521,
    center: {
      lat: 43.2984059,
      lon: -2.9865133,
    },
    nodes: [1593556492, 1593556656, 1593556351, 1593556608, 1593556492],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146069781,
    center: {
      lat: 43.302726,
      lon: -2.990927,
    },
    nodes: [1593562967, 1593562852, 1593562848, 1593562977, 1593562967],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146070643,
    center: {
      lat: 42.8591251,
      lon: -8.5395986,
    },
    nodes: [1593579465, 1593579459, 1593579463, 1593579490, 1593579465],
    tags: {
      leisure: "pitch",
      lit: "yes",
      name: "Pista Deportiva do Centro Cívico do Castiñeiriño",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 146070644,
    center: {
      lat: 42.8677192,
      lon: -8.5534865,
    },
    nodes: [1593579502, 1593579504, 1593579512, 1593579503, 1593579502],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146212035,
    center: {
      lat: 43.3835952,
      lon: -8.400953,
    },
    nodes: [1594861504, 1594861478, 1594861457, 1594861493, 1594861504],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146227749,
    center: {
      lat: 40.4123362,
      lon: -3.6590625,
    },
    nodes: [1595032301, 1595032408, 1595031786, 1595032299, 1595032301],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146227763,
    center: {
      lat: 40.4123195,
      lon: -3.6585602,
    },
    nodes: [1595032409, 1595032355, 1595032317, 1595032133, 1595032409],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146231659,
    center: {
      lat: 40.4126438,
      lon: -3.6560594,
    },
    nodes: [1595082669, 1595082465, 1595082298, 1595082541, 1595082669],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146236747,
    center: {
      lat: 42.0298502,
      lon: -3.7563455,
    },
    nodes: [1595155938, 1595155850, 1595155880, 1595155965, 1595155938],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146236751,
    center: {
      lat: 42.029725,
      lon: -3.7565753,
    },
    nodes: [1595155895, 1595155813, 1595155837, 1595155930, 1595155895],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146244594,
    center: {
      lat: 40.0760444,
      lon: -2.1405908,
    },
    nodes: [1595250872, 1595250867, 1595250891, 1595250853, 1595250872],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 146372245,
    center: {
      lat: 40.4098629,
      lon: -3.6316744,
    },
    nodes: [1596393021, 1596392997, 1596393042, 1596393026, 1596393021],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 146624193,
    center: {
      lat: 40.4276686,
      lon: -3.6075375,
    },
    nodes: [1598923384, 1598923370, 1598923385, 1598923383, 1598923384],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146660545,
    center: {
      lat: 41.4733804,
      lon: 2.186104,
    },
    nodes: [1599256117, 1599256620, 1599256378, 1599256424, 1599256117],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 146790103,
    center: {
      lat: 40.441527,
      lon: -3.6485311,
    },
    nodes: [1600240156, 1600240155, 1600240154, 1600240152, 1600240156],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 147023842,
    center: {
      lat: 42.1747802,
      lon: -8.5095863,
    },
    nodes: [1602174125, 1602174124, 1602174122, 1602174123, 1602174125],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147068933,
    center: {
      lat: 42.2280743,
      lon: -8.4685941,
    },
    nodes: [1602604814, 1602604819, 1602604778, 1602604774, 1602604814],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147082786,
    center: {
      lat: 39.8181041,
      lon: 4.2819885,
    },
    nodes: [1602716335, 1602716303, 1602716300, 1602716331, 1602716335],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147111154,
    center: {
      lat: 38.8704623,
      lon: -1.9259992,
    },
    nodes: [1603169555, 1603169553, 1603169552, 1603169548, 1603169555],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147296964,
    center: {
      lat: 43.3105092,
      lon: -1.8918069,
    },
    nodes: [1605349200, 1605349197, 1605349195, 1605349194, 1605349200],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 147320635,
    center: {
      lat: 40.9813701,
      lon: -5.6526815,
    },
    nodes: [1605517144, 1605517131, 1605517148, 1605517161, 1605517144],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147320639,
    center: {
      lat: 40.9814571,
      lon: -5.6528868,
    },
    nodes: [1605517131, 1605517144, 1605517152, 1605517138, 1605517131],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147553377,
    center: {
      lat: 39.5828171,
      lon: 2.6413937,
    },
    nodes: [
      2623350505, 1607601528, 1607601531, 2623350504, 10220238597, 2623350505,
    ],
    tags: {
      barrier: "fence",
      leisure: "pitch",
      source: "Bing WMS;survey",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147725282,
    center: {
      lat: 40.4239891,
      lon: -3.6157157,
    },
    nodes: [1609213312, 1609213336, 1609213319, 1609213328, 1609213312],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147725286,
    center: {
      lat: 40.4242146,
      lon: -3.6156084,
    },
    nodes: [1609213320, 1609213337, 1609213331, 1609213323, 1609213320],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 147860451,
    center: {
      lat: 40.5833845,
      lon: -3.9986263,
    },
    nodes: [1610153410, 1610153463, 1610153439, 1610153382, 1610153410],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 148010427,
    center: {
      lat: 40.5785964,
      lon: -3.9518207,
    },
    nodes: [1611176906, 1611176912, 1611176898, 1611176887, 1611176906],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 148638442,
    center: {
      lat: 40.3810162,
      lon: -3.7655589,
    },
    nodes: [1617136095, 1617136087, 1617136083, 1617136093, 1617136095],
    tags: {
      leisure: "pitch",
      name: "Instalación Deportiva Municipal Básica Fuerte de Navidad",
      short_name: "IDB Fuerte de Navidad",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 148978513,
    center: {
      lat: 43.3013467,
      lon: -2.9925903,
    },
    nodes: [1620290457, 1620290487, 1620290548, 1620290550, 1620290457],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149029699,
    center: {
      lat: 43.2986288,
      lon: -2.995817,
    },
    nodes: [1620647037, 1620646920, 1620646782, 1620646828, 1620647037],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149029707,
    center: {
      lat: 43.2988069,
      lon: -2.9955668,
    },
    nodes: [1620646763, 1620646754, 1620646933, 1620646922, 1620646763],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149029723,
    center: {
      lat: 43.2987009,
      lon: -2.9954361,
    },
    nodes: [1620646744, 1620646938, 1620646957, 1620646825, 1620646744],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149230985,
    center: {
      lat: 43.2783363,
      lon: -2.9926082,
    },
    nodes: [1622424663, 1622422980, 1622424838, 1622423212, 1622424663],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149231039,
    center: {
      lat: 43.2778254,
      lon: -2.9926372,
    },
    nodes: [1622424301, 1622424003, 1622423546, 1622424278, 1622424301],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149290043,
    center: {
      lat: 39.5815703,
      lon: -0.5203273,
    },
    nodes: [1622931875, 1622931871, 1622931848, 1622931849, 1622931875],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149361494,
    center: {
      lat: 38.6004228,
      lon: -1.1148618,
    },
    nodes: [1623537639, 1623537638, 1623537634, 1623537636, 1623537639],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149440162,
    center: {
      lat: 43.297703,
      lon: -2.9830891,
    },
    nodes: [1624220767, 1624220787, 1624220772, 1624220765, 1624220767],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149440170,
    center: {
      lat: 43.2973684,
      lon: -2.9828335,
    },
    nodes: [1624220764, 1624220769, 1624220797, 1624220795, 1624220764],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149466502,
    center: {
      lat: 42.3533949,
      lon: -3.6858091,
    },
    nodes: [1624343442, 1624343439, 1624343441, 1624343445, 1624343442],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149466503,
    center: {
      lat: 42.3536378,
      lon: -3.6856786,
    },
    nodes: [1624343451, 1624343447, 1624343452, 1624343453, 1624343451],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149469773,
    center: {
      lat: 39.4797929,
      lon: -0.360036,
    },
    nodes: [11540637745, 1624366498, 1624366530, 11540637746, 11540637745],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149505496,
    center: {
      lat: 43.3280611,
      lon: -3.0295983,
    },
    nodes: [
      1624686772, 1624686764, 5754311327, 1624686752, 10049592008, 10049592010,
      10049592009, 1624686759, 1624686772,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149545903,
    center: {
      lat: 42.2429438,
      lon: -8.7031382,
    },
    nodes: [1625132158, 1625132116, 1625132161, 1625132126, 1625132158],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 149581858,
    center: {
      lat: 36.9333601,
      lon: -5.2538664,
    },
    nodes: [1625419651, 1625419642, 1625419638, 1625419649, 1625419651],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 149671781,
    center: {
      lat: 40.6293982,
      lon: -3.1805797,
    },
    nodes: [1626133074, 1626133117, 1626133105, 1626133060, 1626133074],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149697612,
    center: {
      lat: 41.5332147,
      lon: 2.4347308,
    },
    nodes: [
      1626438701, 7967732158, 7967732159, 1626438704, 7967732156, 1626438702,
      1626438700, 1626438703, 7967732161, 7967732162, 7967732163, 7967732160,
      1626438705, 7967775457, 1626438701,
    ],
    tags: {
      "addr:housenumber": "146",
      "addr:postcode": "08302",
      "addr:street": "Carrer Sant Cugat",
      building: "yes",
      "building:levels": "1",
      leisure: "sports_centre",
      name: "Poliesportiu Municipal Eusebi Millàn",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149698316,
    center: {
      lat: 41.5333711,
      lon: 2.4340328,
    },
    nodes: [
      1626445302, 1626445307, 1640201905, 1626445304, 1626445308, 1640201948,
      1626445302,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 149698932,
    center: {
      lat: 41.53283,
      lon: 2.4342521,
    },
    nodes: [
      1626459323, 7967775465, 1626459319, 7967732119, 1626459324, 7967775455,
      1626459323,
    ],
    tags: {
      building: "roof",
      "building:levels": "1",
      leisure: "pitch",
      name: "Pistes de Bàsquet",
      "name:ca": "Pistes de Bàsquet",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 149736346,
    center: {
      lat: 43.2778661,
      lon: -2.9891196,
    },
    nodes: [1626914848, 1626914942, 1626914925, 1626914900, 1626914848],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149780680,
    center: {
      lat: 41.6290886,
      lon: -3.8642312,
    },
    nodes: [1627285675, 1627285639, 1627285560, 1627285587, 1627285675],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149833814,
    center: {
      lat: 40.6353983,
      lon: -3.1602515,
    },
    nodes: [1627818338, 1627818367, 1627818297, 1627818349, 1627818338],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149930033,
    center: {
      lat: 41.9351024,
      lon: 2.2520954,
    },
    nodes: [1628640786, 1628640523, 1628640682, 1628640696, 1628640786],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 149936933,
    center: {
      lat: 43.3190001,
      lon: -3.0174275,
    },
    nodes: [1628716206, 1628716196, 1628716148, 1628716164, 1628716206],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150060977,
    center: {
      lat: 42.3532749,
      lon: -3.6780389,
    },
    nodes: [1629921428, 1629921445, 1629921400, 1629921383, 1629921428],
    tags: {
      leisure: "pitch",
      source: "Bing Aerial Maps",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150060978,
    center: {
      lat: 42.3531831,
      lon: -3.6790316,
    },
    nodes: [1629921401, 1629921413, 1629921364, 1629921356, 1629921401],
    tags: {
      leisure: "pitch",
      source: "Bing Aerial Maps",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150071212,
    center: {
      lat: 36.4157473,
      lon: -6.1508752,
    },
    nodes: [1630007738, 1630007750, 1630007715, 1630007743, 1630007738],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150071215,
    center: {
      lat: 36.4155122,
      lon: -6.1507768,
    },
    nodes: [1630007732, 1630007754, 1630007718, 1630007735, 1630007732],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150158630,
    center: {
      lat: 41.5357388,
      lon: 2.4325311,
    },
    nodes: [1630895492, 1630895469, 1630895467, 1630895449, 1630895492],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 150158634,
    center: {
      lat: 41.5359367,
      lon: 2.4323793,
    },
    nodes: [1630895477, 1630895458, 1630895490, 1630895461, 1630895477],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 150380363,
    center: {
      lat: 39.4994195,
      lon: -0.3935186,
    },
    nodes: [1633007589, 1633007592, 1633007579, 1633007571, 1633007589],
    tags: {
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150394172,
    center: {
      lat: 42.8381519,
      lon: -2.6908658,
    },
    nodes: [1633113712, 1633113729, 1633113713, 1633113708, 1633113712],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150520381,
    center: {
      lat: 41.5645033,
      lon: -3.816592,
    },
    nodes: [1634235066, 1634235064, 1634235061, 1634235063, 1634235066],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150798406,
    center: {
      lat: 43.2834637,
      lon: -2.9888027,
    },
    nodes: [1636741062, 1636740717, 1636740857, 1636741001, 1636741062],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150798435,
    center: {
      lat: 43.2823142,
      lon: -2.9867749,
    },
    nodes: [1636740990, 1636741028, 1636741027, 1636740991, 1636740990],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150818388,
    center: {
      lat: 42.3601826,
      lon: -3.6820522,
    },
    nodes: [1636902333, 1636902286, 1636902210, 1636902296, 1636902333],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "IDEE/PNOA",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 150888423,
    center: {
      lat: 43.2930343,
      lon: -2.9993929,
    },
    nodes: [1637527671, 1637527470, 1637527690, 1637527584, 1637527671],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150891939,
    center: {
      lat: 43.2970148,
      lon: -2.9973836,
    },
    nodes: [1637560512, 1637560530, 1637560643, 1637560525, 1637560512],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150941523,
    center: {
      lat: 38.9799934,
      lon: -1.8363049,
    },
    nodes: [1638019123, 1638019116, 1638019118, 1638019126, 1638019123],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 150942545,
    center: {
      lat: 42.3449477,
      lon: -3.699921,
    },
    nodes: [1638025610, 1638025608, 1638025605, 1638025606, 1638025610],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "IDEE/PNOA",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 150961281,
    center: {
      lat: 39.9871651,
      lon: 4.0954636,
    },
    nodes: [1638174570, 1638174567, 1638174569, 1638174568, 1638174570],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151162744,
    center: {
      lat: 42.357783,
      lon: -3.6791075,
    },
    nodes: [1639868844, 1639869605, 1639869858, 1639869163, 1639868844],
    tags: {
      leisure: "pitch",
      source: "IDEE/PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151393171,
    center: {
      lat: 42.8367454,
      lon: -2.6907756,
    },
    nodes: [1642163305, 1642163300, 1642163298, 1642163302, 1642163305],
    tags: {
      leisure: "pitch",
      source: "geoeuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151405940,
    center: {
      lat: 43.2972259,
      lon: -2.995507,
    },
    nodes: [1642272546, 1642272558, 1642272665, 1642272616, 1642272546],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151405953,
    center: {
      lat: 43.2973047,
      lon: -2.9958918,
    },
    nodes: [1642272597, 1642272542, 1642272577, 1642272601, 1642272597],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151416701,
    center: {
      lat: 42.3464728,
      lon: -3.6850492,
    },
    nodes: [1642395984, 1642396009, 1642395854, 1642395751, 1642395984],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "IDEE/PNOA",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 151473145,
    center: {
      lat: 43.2924666,
      lon: -2.9898445,
    },
    nodes: [1642929183, 1642929304, 1642929302, 1642928878, 1642929183],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151500943,
    center: {
      lat: 41.7253471,
      lon: 1.8095245,
    },
    nodes: [
      1643132672, 1643132219, 2513371175, 1643132559, 1643133016, 1643132672,
    ],
    tags: {
      building: "yes",
      capacity: "5000",
      height: "25",
      leisure: "stadium",
      name: "Nou Congost",
      "name:ca": "Nou Congost",
      sport: "basketball",
      wikidata: "Q4895650",
      wikipedia: "ca:Pavelló Nou Congost",
    },
  },
  {
    type: "way",
    id: 151511510,
    center: {
      lat: 43.2931818,
      lon: -2.986391,
    },
    nodes: [1643222095, 1643222109, 1643222257, 1643222164, 1643222095],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151511520,
    center: {
      lat: 43.2932883,
      lon: -2.9864876,
    },
    nodes: [1643222087, 1643222211, 1643222171, 1643222289, 1643222087],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151527473,
    center: {
      lat: 41.5891596,
      lon: -3.6390328,
    },
    nodes: [1643401579, 1643400447, 1643401253, 1643401731, 1643401579],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151832552,
    center: {
      lat: 27.7516368,
      lon: -15.5842401,
    },
    nodes: [
      1646764833, 1646764808, 1646764744, 1178988378, 1646764738, 1646764749,
      1178988327, 1646764833,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151856067,
    center: {
      lat: 37.9983655,
      lon: -0.6960082,
    },
    nodes: [1646976357, 1646976451, 1646976304, 1646976369, 1646976357],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151882954,
    center: {
      lat: 43.2799809,
      lon: -2.9801193,
    },
    nodes: [1647229878, 1647229897, 1647229858, 1647229818, 1647229878],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151882962,
    center: {
      lat: 43.2797762,
      lon: -2.9800974,
    },
    nodes: [1647229815, 1647230049, 1647229891, 1647230114, 1647229815],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151882973,
    center: {
      lat: 43.2794649,
      lon: -2.9794727,
    },
    nodes: [1647230179, 1647229962, 1647230156, 1647229927, 1647230179],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 151889311,
    center: {
      lat: 40.3994179,
      lon: -3.7708168,
    },
    nodes: [
      1647287330, 1647287306, 1647287334, 9386547290, 1647287337, 1647287330,
    ],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 152065122,
    center: {
      lat: 43.3526123,
      lon: -5.8460109,
    },
    nodes: [
      1648945528, 1648945535, 1648945506, 1648945486, 1658407706, 1648945528,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 152072826,
    center: {
      lat: 42.3351883,
      lon: -3.6929418,
    },
    nodes: [1649033619, 1649033794, 1649033579, 1649033381, 1649033619],
    tags: {
      leisure: "pitch",
      source: "IDEE/PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152072827,
    center: {
      lat: 42.3353297,
      lon: -3.692498,
    },
    nodes: [1649033876, 1649034008, 1649033834, 1649033645, 1649033876],
    tags: {
      leisure: "pitch",
      source: "IDEE/PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152212184,
    center: {
      lat: 39.6386639,
      lon: 2.629183,
    },
    nodes: [1650467493, 1650467497, 1650467490, 1650467488, 1650467493],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152212186,
    center: {
      lat: 39.6397256,
      lon: 2.6283922,
    },
    nodes: [1650467693, 1650467708, 1650467619, 1650467587, 1650467693],
    tags: {
      leisure: "pitch",
      lit: "yes",
      source: "Bing WMS",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152233748,
    center: {
      lat: 38.9944809,
      lon: -1.8577769,
    },
    nodes: [1650614800, 1650614803, 1650614812, 1650614807, 1650614800],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152479714,
    center: {
      lat: 43.3587219,
      lon: -5.8507806,
    },
    nodes: [1652960174, 1652960177, 1652960167, 1652960148, 1652960174],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
      surface: "paved",
    },
  },
  {
    type: "way",
    id: 152623228,
    center: {
      lat: 39.5762648,
      lon: 2.6237712,
    },
    nodes: [1248625919, 1654292071, 1654292072, 1248624824, 1248625919],
    tags: {
      leisure: "pitch",
      source: "Bing WMS",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152632665,
    center: {
      lat: 39.0122344,
      lon: -0.1753084,
    },
    nodes: [
      1654372579, 1654372517, 7900288826, 1654372553, 1654372593, 1654372579,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 152834604,
    center: {
      lat: 42.9023002,
      lon: -9.2629618,
    },
    nodes: [
      1656124817, 1656124810, 1656124799, 6904871670, 1656124800, 1656124817,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 152859447,
    center: {
      lat: 39.0392259,
      lon: -0.189745,
    },
    nodes: [1656387544, 1656387613, 1656387344, 1656387283, 1656387544],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153022821,
    center: {
      lat: 39.1703595,
      lon: -0.2427049,
    },
    nodes: [1657711425, 1657711366, 1657711419, 1657711442, 1657711425],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153024103,
    center: {
      lat: 39.1676067,
      lon: -0.2470739,
    },
    nodes: [1657717934, 1657717085, 1657717201, 1657718437, 1657717934],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153061078,
    center: {
      lat: 37.5876218,
      lon: -4.7520858,
    },
    nodes: [1658087605, 1658087610, 1658087609, 1658087608, 1658087605],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153159014,
    center: {
      lat: 43.2833761,
      lon: -2.9943687,
    },
    nodes: [1658780382, 1658780360, 1658780387, 1658780420, 1658780382],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153159022,
    center: {
      lat: 43.2826533,
      lon: -2.9932792,
    },
    nodes: [1658780407, 1658780460, 1658780365, 1658780356, 1658780407],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153205429,
    center: {
      lat: 37.9258558,
      lon: -1.1607053,
    },
    nodes: [1659171247, 1659171237, 3173204464, 1659171174, 1659171247],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153205445,
    center: {
      lat: 37.9260051,
      lon: -1.1611643,
    },
    nodes: [1659171147, 1659171326, 1659171047, 1659171414, 1659171147],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153220127,
    center: {
      lat: 39.1824065,
      lon: -0.2225097,
    },
    nodes: [1659309063, 1659308966, 1659308964, 1659309054, 1659309063],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153224514,
    center: {
      lat: 40.362372,
      lon: -3.8051814,
    },
    nodes: [1659345256, 1659345240, 1659345225, 1659345246, 1659345256],
    tags: {
      barrier: "fence",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 153270197,
    center: {
      lat: 40.6075854,
      lon: -4.0262521,
    },
    nodes: [1659749473, 1659749467, 1659749460, 1659749465, 1659749473],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154042311,
    center: {
      lat: 43.2952054,
      lon: -2.9837198,
    },
    nodes: [1666455648, 1666455710, 1666455487, 1666455345, 1666455648],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154106649,
    center: {
      lat: 42.8461913,
      lon: -2.6484241,
    },
    nodes: [1667005959, 1667005966, 1667005892, 1667005888, 1667005959],
    tags: {
      leisure: "pitch",
      source: "GeoEuskadi",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154380749,
    center: {
      lat: 39.0464964,
      lon: -0.1949642,
    },
    nodes: [1669222530, 1669222691, 1669221785, 1669221717, 1669222530],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154380755,
    center: {
      lat: 39.0464463,
      lon: -0.1967535,
    },
    nodes: [1669222590, 1669222893, 1669221693, 1669221585, 1669222590],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154556414,
    center: {
      lat: 38.9884322,
      lon: -1.871389,
    },
    nodes: [1670918333, 1670918327, 1670918306, 1670918280, 1670918333],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154556415,
    center: {
      lat: 38.9887423,
      lon: -1.8709932,
    },
    nodes: [1670918335, 1670918360, 1670918331, 1670918256, 1670918335],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154559656,
    center: {
      lat: 40.5827791,
      lon: -4.0128444,
    },
    nodes: [1670960218, 1670960256, 1670960306, 1670960286, 1670960218],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154559658,
    center: {
      lat: 40.5829298,
      lon: -4.012868,
    },
    nodes: [1670960291, 1670960311, 1670960363, 1670960357, 1670960291],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154602076,
    center: {
      lat: 39.459199,
      lon: -6.3787833,
    },
    nodes: [1671257613, 1671257642, 1671257317, 1671257295, 1671257613],
    tags: {
      leisure: "pitch",
      source: "Bing Aerial Maps",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154753337,
    center: {
      lat: 43.2990944,
      lon: -2.9820755,
    },
    nodes: [1672446667, 1672446583, 1672446641, 1672446849, 1672446667],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154753360,
    center: {
      lat: 43.299039,
      lon: -2.9817652,
    },
    nodes: [1672446828, 1672446901, 1672446816, 1672446639, 1672446828],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154832190,
    center: {
      lat: 38.9674784,
      lon: -1.8646579,
    },
    nodes: [1673020516, 1673020565, 1673020557, 1673020566, 1673020516],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154903918,
    center: {
      lat: 39.9964471,
      lon: -0.0729359,
    },
    nodes: [1673622316, 1673622336, 1673622337, 1673622318, 1673622316],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154909241,
    center: {
      lat: 38.8920854,
      lon: -6.9869375,
    },
    nodes: [
      1673669754, 1673669687, 1673669725, 5516568746, 5516568745, 1673669694,
      1673669754,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 154985671,
    center: {
      lat: 43.2862169,
      lon: -2.9783034,
    },
    nodes: [1674349754, 1674349740, 1674349818, 1674349768, 1674349754],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 154985679,
    center: {
      lat: 43.285979,
      lon: -2.9782732,
    },
    nodes: [1674349854, 1674349715, 1674349733, 1674349822, 1674349854],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "asphalt",
    },
  },
  {
    type: "way",
    id: 155023025,
    center: {
      lat: 43.2842241,
      lon: -2.9817105,
    },
    nodes: [1674683002, 1674682800, 1674682855, 1674683025, 1674683002],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 155263340,
    center: {
      lat: 37.9409043,
      lon: -1.1313054,
    },
    nodes: [1676710051, 1676710056, 1676710074, 1676710060, 1676710051],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 155263341,
    center: {
      lat: 37.9410821,
      lon: -1.1314623,
    },
    nodes: [1676710076, 1676710045, 1676710046, 1676710054, 1676710076],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 155286878,
    center: {
      lat: 37.6175855,
      lon: -0.8797035,
    },
    nodes: [
      1676879479, 1676879463, 1676879467, 1676879469, 1676879473, 1676879481,
      1676879479,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 155692466,
    center: {
      lat: 42.8040804,
      lon: -8.5340218,
    },
    nodes: [1680684005, 1680684008, 1680684013, 1680684011, 1680684005],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 155778642,
    center: {
      lat: 41.3381806,
      lon: -4.5828313,
    },
    nodes: [
      1681409551, 1681409544, 1681409545, 9273503988, 1681409542, 1681409551,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156011876,
    center: {
      lat: 41.3354504,
      lon: -4.5843063,
    },
    nodes: [1683283966, 1683283971, 1683283968, 1683283973, 1683283966],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156012766,
    center: {
      lat: 41.3356754,
      lon: -4.5863154,
    },
    nodes: [1683285607, 1683285592, 1683285602, 1683285605, 1683285607],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156265838,
    center: {
      lat: 40.5681079,
      lon: -3.6337087,
    },
    nodes: [1685258384, 1685258383, 1685258381, 1685258382, 1685258384],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156265839,
    center: {
      lat: 40.567915,
      lon: -3.6336811,
    },
    nodes: [1685258381, 1685258370, 1685258372, 1685258382, 1685258381],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156499259,
    center: {
      lat: 41.6674364,
      lon: -3.6850827,
    },
    nodes: [1687427943, 1687427968, 1687428154, 1687428129, 1687427943],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156982698,
    center: {
      lat: 40.4738958,
      lon: -3.5849463,
    },
    nodes: [378319390, 378320483, 257739567, 378319384, 378319390],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 156985156,
    center: {
      lat: 40.5403137,
      lon: 0.4783459,
    },
    nodes: [
      3093840759, 3097606210, 3097606216, 1692206043, 3097606186, 1692206068,
      8256100365, 8256100369, 8256100373, 1692206061, 3097606194, 1692206063,
      1692206067, 3093840759,
    ],
    tags: {
      leisure: "sports_centre",
      name: "Pavelló Municipal d'Esports",
      "name:ca": "Pavelló Municipal d'Esports",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 157118477,
    center: {
      lat: 38.8819245,
      lon: -2.1424185,
    },
    nodes: [1693523789, 1693523661, 1693523601, 1693523846, 1693523789],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 157911660,
    center: {
      lat: 38.9039943,
      lon: -1.6965967,
    },
    nodes: [1701422194, 1701422032, 1701422061, 1701422252, 1701422194],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158181578,
    center: {
      lat: 36.6930077,
      lon: -6.1165865,
    },
    nodes: [
      1704113960, 1704113976, 1704113977, 5418469694, 5418469693, 1704113962,
      1704113957, 1704113961, 1704113958, 1704113965, 1704113960,
    ],
    tags: {
      building: "public",
      "building:levels": "1",
      leisure: "sports_centre",
      name: "Palacio Municipal de Deportes de Chapín",
      noaddress: "yes",
      sport: "basketball",
      wheelchair: "yes",
    },
  },
  {
    type: "way",
    id: 158197178,
    center: {
      lat: 43.0250639,
      lon: -7.5723334,
    },
    nodes: [1704286180, 1704286225, 1704286217, 1704286163, 1704286180],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158197188,
    center: {
      lat: 43.0247728,
      lon: -7.5722227,
    },
    nodes: [1704286080, 1704286108, 1704286162, 1704286136, 1704286080],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158294922,
    center: {
      lat: 42.8835882,
      lon: -8.4931895,
    },
    nodes: [1705210497, 1705210495, 1705210496, 1705210498, 1705210497],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158299220,
    center: {
      lat: 40.3303089,
      lon: -3.8661439,
    },
    nodes: [1705258463, 1705258451, 1705258458, 1705258453, 1705258463],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158308444,
    center: {
      lat: 43.0187571,
      lon: -7.5583009,
    },
    nodes: [1705347110, 1705347105, 1705347107, 1705347112, 1705347110],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 158308445,
    center: {
      lat: 43.0303432,
      lon: -7.5641358,
    },
    nodes: [1705347553, 1705347552, 1705347510, 1705347511, 1705347553],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158314082,
    center: {
      lat: 42.8679865,
      lon: -8.5762988,
    },
    nodes: [
      1705400816, 1705400812, 1705400810, 5280797681, 5280797682, 1705400814,
      1705400816,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158372129,
    center: {
      lat: 43.0233093,
      lon: -7.5703623,
    },
    nodes: [1705825779, 1705825748, 1705825758, 1705825787, 1705825779],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158603702,
    center: {
      lat: 40.1831241,
      lon: -3.6845728,
    },
    nodes: [1707683537, 1707683538, 1707683539, 1707683536, 1707683537],
    tags: {
      building: "yes",
      leisure: "sports_centre",
      name: "Pabellón Jesús España",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158605040,
    center: {
      lat: 42.3283741,
      lon: -3.6999679,
    },
    nodes: [1707695839, 1707695840, 1707695838, 1707695837, 1707695839],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 158691790,
    center: {
      lat: 42.2311775,
      lon: -8.365974,
    },
    nodes: [1708475645, 1708475643, 1708475632, 1708475639, 1708475645],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158704502,
    center: {
      lat: 40.3903633,
      lon: -3.6882359,
    },
    nodes: [1708605835, 1708605915, 1708605842, 1708605959, 1708605835],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158709841,
    center: {
      lat: 40.1787804,
      lon: -3.6850403,
    },
    nodes: [1708650336, 1708650256, 1708650321, 1708650259, 1708650336],
    tags: {
      access: "private",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158804671,
    center: {
      lat: 42.3126802,
      lon: -3.5805824,
    },
    nodes: [1709353755, 1709353757, 1709353756, 1709353754, 1709353755],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158805182,
    center: {
      lat: 42.9277797,
      lon: -3.4839788,
    },
    nodes: [1709359039, 1709359037, 1709359034, 1709359036, 1709359039],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158905026,
    center: {
      lat: 40.4766525,
      lon: -3.7214788,
    },
    nodes: [1710266235, 1710266227, 1710266213, 1710266231, 1710266235],
    tags: {
      building: "roof",
      covered: "yes",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158910532,
    center: {
      lat: 42.3407421,
      lon: -3.6329212,
    },
    nodes: [1710314412, 1710314410, 1710314326, 1710314323, 1710314412],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 158949006,
    center: {
      lat: 41.4720567,
      lon: 0.3353535,
    },
    nodes: [1710639946, 1710639944, 1710639933, 1710639942, 1710639946],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 159082379,
    center: {
      lat: 43.2604267,
      lon: -2.9323777,
    },
    nodes: [1711816447, 1711816446, 1711816451, 1711816441, 1711816447],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 159082385,
    center: {
      lat: 43.260288,
      lon: -2.9328347,
    },
    nodes: [1711816422, 1711816423, 1711816443, 1711816432, 1711816422],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 159160428,
    center: {
      lat: 28.0841783,
      lon: -16.7268791,
    },
    nodes: [1712608110, 1712608009, 1712608120, 1712608187, 1712608110],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 159326828,
    center: {
      lat: 43.4906438,
      lon: -8.2161576,
    },
    nodes: [
      1714346411, 6778122276, 6778122275, 1714346414, 1714346416, 1714346410,
      6778122274, 1714346411,
    ],
    tags: {
      "addr:street": "Venezuela",
      building: "yes",
      leisure: "sports_centre",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 159417179,
    center: {
      lat: 40.1829421,
      lon: -3.6794041,
    },
    nodes: [1715350214, 1715350212, 1715350145, 1715350321, 1715350214],
    tags: {
      leisure: "pitch",
      source: "Imágenes aéreas Bing;conocimiento local.",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 159694373,
    center: {
      lat: 40.3270676,
      lon: -3.8668331,
    },
    nodes: [1718022916, 1718022914, 1718022913, 1718022915, 1718022916],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 159801331,
    center: {
      lat: 38.8748277,
      lon: -1.0977208,
    },
    nodes: [1719039472, 1719039452, 1719039491, 1719039437, 1719039472],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 160201022,
    center: {
      lat: 40.8772904,
      lon: 0.7116159,
    },
    nodes: [1722650800, 1722650802, 1722650866, 1722650808, 1722650800],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 160230984,
    center: {
      lat: 41.6601927,
      lon: -3.6887049,
    },
    nodes: [1722934855, 1722934838, 1722934653, 1722934721, 1722934855],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 160230994,
    center: {
      lat: 41.6602094,
      lon: -3.688972,
    },
    nodes: [1722934882, 1722934860, 1722934704, 1722934733, 1722934882],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 160773330,
    center: {
      lat: 39.5812174,
      lon: 2.6207293,
    },
    nodes: [1728113398, 1728113421, 1728113423, 1728113419, 1728113398],
    tags: {
      leisure: "pitch",
      name: "Ugui Arena",
      source: "cblasalle.com",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 161033957,
    center: {
      lat: 40.8623404,
      lon: 0.7797407,
    },
    nodes: [1730385356, 1730385342, 6709970784, 6709970783, 1730385356],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 161051280,
    center: {
      lat: 42.2365836,
      lon: 2.2893265,
    },
    nodes: [1730542855, 1730400992, 1730400991, 1730542857, 1730542855],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 161053967,
    center: {
      lat: 42.2167822,
      lon: -8.7462255,
    },
    nodes: [1730554888, 1730555148, 1730554842, 1730554829, 1730554888],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "artificial_turf",
    },
  },
  {
    type: "way",
    id: 161255872,
    center: {
      lat: 42.9318321,
      lon: -3.5027246,
    },
    nodes: [1732464911, 1732464893, 1732464930, 1732464943, 1732464911],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 161303398,
    center: {
      lat: 42.9319912,
      lon: -3.5085317,
    },
    nodes: [1732940231, 1732940233, 1732940232, 1732940230, 1732940231],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 161502064,
    center: {
      lat: 41.659762,
      lon: -0.8580413,
    },
    nodes: [
      1734766319, 1734766318, 1734766316, 1734766317, 1734771669, 1734766319,
    ],
    tags: {
      "addr:street": "Pintor Manuel Viola",
      building: "yes",
      "contact:phone": "+34 976 476809",
      leisure: "sports_centre",
      name: 'Pabellón Deportivo Municipal "La Jota"',
      "ref:ayto_zaragoza": "recurso-827",
      source: "Ayuntamiento de Zaragoza",
      "source:date": "2011-11-11T10:48:27Z",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 161671287,
    center: {
      lat: 43.2583162,
      lon: -2.9206269,
    },
    nodes: [1736371767, 1736371711, 1736371717, 1736371591, 1736371767],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162064144,
    center: {
      lat: 39.6069792,
      lon: 2.70156,
    },
    nodes: [1740106842, 1740106844, 1740106843, 1740106823, 1740106842],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162092942,
    center: {
      lat: 40.3587419,
      lon: -3.6964805,
    },
    nodes: [1740271652, 1740271654, 1740271641, 1740271638, 1740271652],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162095637,
    center: {
      lat: 42.2275365,
      lon: -8.7149656,
    },
    nodes: [1740296441, 1740296439, 1740296435, 1740296438, 1740296441],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162128778,
    center: {
      lat: 40.3533168,
      lon: -3.6963193,
    },
    nodes: [1740617735, 1740617733, 1740617680, 1740617683, 1740617735],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162134702,
    center: {
      lat: 42.1497009,
      lon: -8.630379,
    },
    nodes: [1740663002, 1740662882, 1740662902, 1740663019, 1740663002],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162200859,
    center: {
      lat: 43.2999483,
      lon: -2.9970809,
    },
    nodes: [
      1741311677, 1741311787, 1741311675, 5372873390, 1741311724, 1741311677,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162200866,
    center: {
      lat: 43.3001623,
      lon: -2.99821,
    },
    nodes: [1741311681, 1741311764, 1741311748, 1741311669, 1741311681],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162598556,
    center: {
      lat: 42.3402641,
      lon: -3.7316569,
    },
    nodes: [1744604080, 1744604077, 1744604075, 1744604078, 1744604080],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162598558,
    center: {
      lat: 42.3404721,
      lon: -3.7314205,
    },
    nodes: [1744604091, 1744604081, 1744604079, 1744604086, 1744604091],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162781296,
    center: {
      lat: 41.1337656,
      lon: 1.2446675,
    },
    nodes: [1746027975, 1746027969, 1746027973, 1746027976, 1746027975],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162781298,
    center: {
      lat: 41.1349157,
      lon: 1.2477419,
    },
    nodes: [
      1746028001, 1746027983, 1746028000, 5189014867, 1746028010, 1746028001,
    ],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162924703,
    center: {
      lat: 42.3456457,
      lon: -3.6929742,
    },
    nodes: [1747175467, 1747175500, 1747175488, 1747175457, 1747175467],
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      name: "Pista de baloncesto Carlos Sainz Esteban",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162925673,
    center: {
      lat: 42.3504668,
      lon: -3.6930276,
    },
    nodes: [1747185305, 1747185308, 672776635, 672776622, 1747185305],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162925674,
    center: {
      lat: 42.3503221,
      lon: -3.6932388,
    },
    nodes: [1747185304, 672776610, 672776623, 1747185306, 1747185304],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162926420,
    center: {
      lat: 42.3471,
      lon: -3.6965151,
    },
    nodes: [1747203883, 1747203882, 1747203880, 1747203881, 1747203883],
    tags: {
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162926422,
    center: {
      lat: 42.338836,
      lon: -3.694446,
    },
    nodes: [1747203837, 1747203813, 1747203818, 1747203840, 1747203837],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162926424,
    center: {
      lat: 42.3389284,
      lon: -3.6939672,
    },
    nodes: [1747203851, 1747203826, 1747203832, 1747203853, 1747203851],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162926425,
    center: {
      lat: 42.3386493,
      lon: -3.6943606,
    },
    nodes: [1747203798, 1747203785, 1747203788, 1747203811, 1747203798],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162926625,
    center: {
      lat: 42.3605173,
      lon: -3.66557,
    },
    nodes: [1747221974, 1747221954, 1747221955, 1747221978, 1747221974],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162926627,
    center: {
      lat: 42.3605538,
      lon: -3.6653348,
    },
    nodes: [1747221980, 1747221957, 1747221958, 1747221984, 1747221980],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162931362,
    center: {
      lat: 42.3405902,
      lon: -3.688968,
    },
    nodes: [1747227512, 1747227508, 1747227509, 1747227514, 1747227512],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162931363,
    center: {
      lat: 42.3403244,
      lon: -3.6889198,
    },
    nodes: [1747227506, 1747227502, 1747227504, 1747227507, 1747227506],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162961694,
    center: {
      lat: 43.3231153,
      lon: -8.4441106,
    },
    nodes: [1747516250, 1747516249, 1747516248, 1747516261, 1747516250],
    tags: {
      access: "yes",
      hoops: "2",
      leisure: "pitch",
      lit: "yes",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 162972755,
    center: {
      lat: 42.3601101,
      lon: -3.6736078,
    },
    nodes: [1747606085, 1747606086, 1747606084, 1747606082, 1747606085],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162972756,
    center: {
      lat: 42.3597814,
      lon: -3.6742066,
    },
    nodes: [1747606072, 1747606076, 1747606080, 1747606078, 1747606072],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 162982893,
    center: {
      lat: 42.3575797,
      lon: -3.6592721,
    },
    nodes: [1747689791, 1747689786, 1747689789, 1747689795, 1747689791],
    tags: {
      leisure: "pitch",
      sport: "basketball",
      "surface:colour": "green",
    },
  },
  {
    type: "way",
    id: 162997715,
    center: {
      lat: 42.8056457,
      lon: -1.6603072,
    },
    nodes: [1747786710, 1747786703, 1747786683, 1747786695, 1747786710],
    tags: {
      leisure: "pitch",
      source: "PNOA",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163106542,
    center: {
      lat: 42.1618759,
      lon: -8.6373668,
    },
    nodes: [1748760216, 1748760214, 1748760212, 1748760215, 1748760216],
    tags: {
      access: "customers",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163196934,
    center: {
      lat: 43.2639344,
      lon: -2.9548057,
    },
    nodes: [1749459648, 1749459606, 1749459406, 1749459636, 1749459648],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163510536,
    center: {
      lat: 42.3364947,
      lon: -3.7040587,
    },
    nodes: [1751807606, 1751807605, 1751807607, 1751807608, 1751807606],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163602120,
    center: {
      lat: 42.0611184,
      lon: -2.9996905,
    },
    nodes: [1752673019, 1752673001, 1752672933, 1752672955, 1752673019],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163720006,
    center: {
      lat: 36.6362158,
      lon: -6.3282411,
    },
    nodes: [1753988516, 1753988512, 1753988511, 1753988515, 1753988516],
    tags: {
      hoops: "2",
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163808662,
    center: {
      lat: 42.3579393,
      lon: -3.6685655,
    },
    nodes: [1754887087, 1754887065, 1754887070, 1754887089, 1754887087],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
  {
    type: "way",
    id: 163844507,
    center: {
      lat: 42.3463074,
      lon: -3.6903306,
    },
    nodes: [1755156061, 1755156062, 1755156060, 1755156058, 1755156061],
    tags: {
      leisure: "pitch",
      lit: "no",
      sport: "basketball",
      surface: "concrete",
    },
  },
  {
    type: "way",
    id: 163921160,
    center: {
      lat: 40.3362593,
      lon: -3.8322389,
    },
    nodes: [1755842771, 1755842773, 1755842748, 1755842802, 1755842771],
    tags: {
      leisure: "pitch",
      sport: "basketball",
    },
  },
];

async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "MiAppFavorita/1.0 (tucorreo@ejemplo.com)",
      },
    });

    if (!response.ok) {
      console.error(`Error ${response.status} para ${lat}, ${lon}`);
      return {};
    }

    const data = await response.json();
    const address = data.address || {};

    return {
      city: address.city || address.town || address.village || "",
      province: address.state || "",
    };
  } catch (error) {
    console.error("Error de red:", error);
    return {};
  }
}

async function enriquecerDatos() {
  try {
    await client.connect();
    for (let i = 0; i < datos.length; i++) {
      const item = datos[i];

      const name = "Campo de baloncesto";
      const type = item.tags?.sport || "desconocido";
      const city = item.address?.city || "";
      const state = item.address?.province || "";
      const access = item.tags?.access === "private" ? "private" : "public";

      let lat = null;
      let lon = null;

      if (item.type === "node") {
        lat = item.lat;
        lon = item.lon;
      } else if (item.type === "way") {
        lat = item.center?.lat;
        lon = item.center?.lon;
      } else {
        console.log(`Tipo desconocido: ${item.type}, se omite`);
        continue;
      }

      if (!lat || !lon) {
        console.log(`No hay coordenadas para un pitch, se omite`);
        continue;
      }

      if (lat !== null && lon !== null) {
        const extra = await reverseGeocode(lat, lon);
        datos[i].address = extra;

        console.log(
          `✔ Enriquecido ID ${item.id}: ${extra.city}, ${extra.province}`
        );
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera para no saturar
        const query = `
        INSERT INTO Pitches (Name, City, State, Type, Reserved, Latitude, Longitude, Access)
        VALUES ($1, $2, $3, $4, FALSE, $5, $6, $7);
      `;

        await client.query(query, [name, city, state, type, lat, lon, access]);

        console.log("✅ Importación completada con campo access");
      } else {
        console.warn(`⚠ No se encontraron coordenadas para ID ${item.id}`);
      }
    }
  } catch (error) {
    console.error("Error al enriquecer datos:", error);
  } finally {
    await client.end();
  }
}

enriquecerDatos();
