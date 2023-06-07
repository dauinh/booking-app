-- Only in development stage
DROP TABLE IF EXISTS hosts;

CREATE TABLE hosts (
  -- generate randomized id
  id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- more accessible and orderly
  _id SERIAL NOT NULL,
  -- soft delete: keep in db, not on user's gui
  _active BOOLEAN NOT NULL DEFAULT TRUE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  -- good to have for analytics
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);