\c world

BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE person (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    country_id text NOT NULL,
    city_id integer NOT NULL
);

COMMIT;