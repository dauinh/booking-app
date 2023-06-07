-- Only in development stage
DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- for UX
  _id SERIAL NOT NULL,
  host_id UUID NOT NULL REFERENCES hosts(id),
  guest_id UUID NOT NULL REFERENCES guests(id),
  check_in_date TIMESTAMP WITH TIME ZONE NOT NULL,
  check_out_date TIMESTAMP WITH TIME ZONE NOT NULL,
  total_price INT NOT NULL,
  -- good to have for analytics
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);