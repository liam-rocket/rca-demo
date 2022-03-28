-- run script psql -f init_tables.sql <database>
-- psql -d user_auth -f init_tables.sql

CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT, password TEXT);