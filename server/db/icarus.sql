DROP TABLE suppliers;
DROP TABLE requisitioners;
DROP TABLE orders;
DROP TABLE invoices;

CREATE TABLE suppliers(
    id SERIAL FOREIGN KEY,
    name VARCHAR(255),
);

CREATE TABLE requisitioners(
    id SERIAL FOREIGN KEY,
    name VARCHAR(255),
    department code VARCHAR(255),
);

CREATE TABLE orders(
    id SERIAL FOREIGN KEY,
    date DATETIME, 
    po_number INT,
    full_amount_raised INT,
    receipted_amount INT,
    tax_rate INT,
    -- Keys here, check re inserting
);

CREATE TABLE invoices(
    invoice_number INT,
    date_of_invoice DATETIME,
    description_of_goods VARCHAR(255),
    pre_tax INT,
    tax_rate INT,
    total_to_pay INT,
    status_matched BOOLEAN,
);

INSERT INTO suppliers (name) VALUES ("Hewlett Packard");
INSERT INTO suppliers (name) VALUES ("Pertemps");
INSERT INTO suppliers (name) VALUES ("Lyreco");
INSERT INTO suppliers (name) VALUES ("Scottish Power");
INSERT INTO suppliers (name) VALUES ("Redfern Travel");
INSERT INTO suppliers (name) VALUES ("Benugo");
INSERT INTO suppliers (name) VALUES ("Costa Coffee");
INSERT INTO suppliers (name) VALUES ("Costco");

INSERT INTO requisitioners (name, department_code) VALUES ("Maurice Moss", IT);
INSERT INTO requisitioners (name, department_code) VALUES ("Jenn Barber", MG);
INSERT INTO requisitioners (name, department_code) VALUES ("Roy", IT);
INSERT INTO requisitioners (name, department_code) VALUES ("Douglas Renholm", CO);
INSERT INTO requisitioners (name, department_code) VALUES ("Richmond", AD);

INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/09/08, 145, 200, 150, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/09/12, 146, 700, 400, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/06/08, 147, 1000, 900, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/04/10, 148, 150, 150, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/03/07, 149, 125, 50, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/03/06, 150, 700, 500, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/09/16, 151, 800, 400, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/09/08, 152, 2300, 2150, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/09/06, 153, 800, 400, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/09/02, 154, 350, 150, 20);
INSERT INTO orders (date, po_number, full_amount_raised, receipted_amount, tax_rate) VALUES (2022/07/06, 155, 1300, 1000, 20);