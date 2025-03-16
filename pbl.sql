
CREATE DATABASE hostel_feedback;
USE hostel_feedback;


CREATE TABLE feedbacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL DEFAULT 'Anonymous',  -- Name of the person submitting feedback
  feedback TEXT NOT NULL,                          -- The feedback content
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp when the feedback was created
);

select * from feedbacks;

CREATE TABLE feedbacks2 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL DEFAULT 'Anonymous',  -- Name of the person submitting feedback
  feedback TEXT NOT NULL,                          -- The feedback content
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp when the feedback was created
);



-- LunchOrders Table
CREATE TABLE LunchOrders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(50) NOT NULL,
    hostel VARCHAR(100) NOT NULL,
    order_type VARCHAR(100) NOT NULL,
    days VARCHAR(255) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LunchVerification Table
CREATE TABLE LunchVerification (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES LunchOrders(id) ON DELETE CASCADE
);

-- Cre-- ate the database
-- CREATE DATABASE lunch_order_system;

-- -- Use the database
-- USE lunch_order_system;

-- Create the orders table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studentId VARCHAR(100) NOT NULL,
  hostel VARCHAR(100) NOT NULL,
  orderType VARCHAR(50) NOT NULL,
  days TEXT NOT NULL,
  totalPrice DECIMAL(10, 2) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from orders;







CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO admins (username, password)
VALUES
    ('City View', 'password12');  -- New user with the username 'sunset'
INSERT INTO admins (username, password)
VALUES
    ('sunset', 'password123');  -- New user with the username 'sunset'

select * from admins;


CREATE TABLE verifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(50) NOT NULL,
  hostel VARCHAR(100) NOT NULL,
  day VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from verifications;
INSERT INTO verifications (student_id, hostel, day) 
VALUES 
  ('S12345', 'Sunset Hostel', 'Monday'),
  ('S67890', 'Sunset Hostel', 'Tuesday'),
  ('S23456', 'Sunset Hostel', 'Wednesday'),
  ('S78901', 'Hostel D', 'Thursday'),
  ('S34567', 'Sunset Hostel', 'Friday');
  
  INSERT INTO verifications (student_id, hostel, day) 
VALUES 
  ('S135', 'City View Hostel', 'Monday'),
  ('S790', 'City View H0stel', 'Tuesday'),
  ('S356', 'City View', 'Wednesday');

