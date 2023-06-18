ALTER TABLE hosts
ADD UNIQUE (email);

ALTER TABLE guests
ADD UNIQUE (email);