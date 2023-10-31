CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    mobile INT,
    gender BOOLEAN
    );
    
INSERT INTO students 
    (first_name, last_name, mobile, gender) 
    VALUES 
    ('Foong', 'Leung', 9987712, true), 
    ('Liam', 'Leung', 123456, true),
    ('Sam', 'O"Shaughnessy', 2781192, true), 
    ('Neo', 'Yuan', 4366813, true)


UPDATE students SET first_name = 'Neo Kai', mobile = 86739984 WHERE id = 3;

UPDATE students SET first_name = 'Neo Kai', mobile = 86739984 WHERE first_name = 'Neo';

CREATE TABLE student_addresses (
    id SERIAL PRIMARY KEY,
    student_id INT,
    address VARCHAR(255),
    CONSTRAINT fk_student_id
    FOREIGN KEY (student_id)
    REFERENCES students(id)    
);

INSERT INTO student_addresses 
    (student_id, address) 
    VALUES 
    (1, 'HK'), 
    (1, 'SG'),
    (2, 'HK'), 
    (3, 'SG')
