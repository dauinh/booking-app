-- Only in development stage
DROP TABLE IF EXISTS properties;

CREATE TABLE properties (
  -- generate randomized id
  id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- more accessible and orderly
  _id SERIAL NOT NULL,
  -- soft delete: keep in db, not on user's gui
  _active BOOLEAN NOT NULL DEFAULT TRUE,
  host_id UUID NOT NULL REFERENCES hosts(id),
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  -- good to have for analytics
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);