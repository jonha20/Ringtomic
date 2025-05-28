CREATE TABLE IF NOT EXISTS Users (
  Id SERIAL PRIMARY KEY,
  Name TEXT NOT NULL,
  Email TEXT UNIQUE NOT NULL,
  Password TEXT NOT NULL,
  Logged BOOLEAN DEFAULT FALSE,
  Role TEXT DEFAULT 'user',
  image_url TEXT DEFAULT 'https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png'
);

CREATE TABLE IF NOT EXISTS Pitches (
  Id SERIAL PRIMARY KEY,
  Name TEXT,
  City TEXT,
  State TEXT,
  Type TEXT,
  Reserved BOOLEAN DEFAULT FALSE,
  Latitude FLOAT,
  Longitude FLOAT,
  Access TEXT DEFAULT 'public'
);

CREATE TABLE IF NOT EXISTS Favorites (
  IdUser INTEGER,
  IdPitch INTEGER,
  CustomName TEXT,
  PRIMARY KEY (IdUser, IdPitch),
  FOREIGN KEY (IdUser) REFERENCES Users(Id) ON DELETE CASCADE,
  FOREIGN KEY (IdPitch) REFERENCES Pitches(Id) ON DELETE CASCADE
);