-- Only in development stage
DROP TABLE IF EXISTS guests;

CREATE TABLE guests (
  -- generate randomized id
  id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  _id SERIAL NOT NULL,
  -- soft delete: keep in db, not on user's gui
  _active BOOLEAN NOT NULL DEFAULT TRUE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  -- good to have for analytics
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);