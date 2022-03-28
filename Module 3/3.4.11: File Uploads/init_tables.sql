-- psql -d uploads -f init_tables.sql

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  label TEXT,
  photo TEXT
);