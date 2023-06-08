-- For the hosts table
INSERT INTO hosts (_active, name, phone, email, address)
VALUES
  (true, 'Captain Hook', '0901234561', 'captainhook@example.com', '123 Pirate Street, Neverland'),
  (true, 'Sherlock Holmes', '0901234562', 'sherlock@example.com', '221B Baker Street, London'),
  (true, 'Wonder Woman', '0901234563', 'wonderwoman@example.com', '456 Paradise Island, Themyscira'),
  (true, 'Darth Vader', '0901234564', 'darthvader@example.com', '321 Death Star, Galaxy Far Far Away'),
  (true, 'Harry Potter', '0901234565', 'harrypotter@example.com', '654 Privet Drive, Little Whinging');

-- For the guests table
INSERT INTO guests (_active, name, phone, email)
VALUES
  (true, 'Gandalf the Grey', '0901234569', 'gandalf@example.com'),
  (true, 'Captain Jack Sparrow', '0901234570', 'jacksparrow@example.com'),
  (true, 'Princess Leia', '0901234571', 'princessleia@example.com'),
  (true, 'Mario Bros', '0901234572', 'mariobros@example.com'),
  (true, 'Katniss Everdeen', '0901234573', 'katnisseverdeen@example.com');

-- For the properties table
INSERT INTO properties (_active, host_id, name, address)
VALUES
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Cozy Cottage', '123 Main Street'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Luxury Villa', '456 Elm Avenue'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Charming Bungalow', '789 Oak Drive'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Modern Loft', '321 Maple Lane'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Beach House', '654 Pine Street'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Rustic Cabin', '987 Oak Street'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Spacious Condo', '654 Elm Avenue'),
    (TRUE, (SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), 'Mountain Retreat', '321 Pine Street');

INSERT INTO bookings (host_id, guest_id, check_in_date, check_out_date, total_price)
VALUES
    ((SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), (SELECT id FROM guests ORDER BY RANDOM() LIMIT 1), '2023-01-01', '2023-01-05', 500),
    ((SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), (SELECT id FROM guests ORDER BY RANDOM() LIMIT 1), '2023-02-01', '2023-02-10', 1000),
    ((SELECT id FROM hosts ORDER BY RANDOM() LIMIT 1), (SELECT id FROM guests ORDER BY RANDOM() LIMIT 1), '2023-03-01', '2023-03-07', 700);