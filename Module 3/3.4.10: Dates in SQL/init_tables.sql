-- createdb sightings
-- psql -d sightings -f init_tables.sql

CREATE TABLE sightings (
    id            SERIAL PRIMARY KEY,
    description   TEXT,
    date          DATE,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);