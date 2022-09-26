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
    invoice_number VARCHAR(255),
    date_of_invoice DATETIME,
    description_of_goods VARCHAR(255),
    pre_tax INT,
    tax_rate INT,
    tax_to_pay INT,
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
INSERT INTO suppliers (name) VALUES ("Mitie Cleaning");
INSERT INTO suppliers (name) VALUES ("S1 Marketing");
INSERT INTO suppliers (name) VALUES ("Deloitte Accounting");
INSERT INTO suppliers (name) VALUES ("BT");
INSERT INTO suppliers (name) VALUES ("Harper MacLeod")

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

INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("INV476", 2022/07/01, "New monitor for accounts", 145, 20, 29, 174, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("INV590", 2022/05/01, "Finance stationary", 125, 20, 25, 150, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("INV465", 2022/09/01, "Boardroom projector", 145, 20, 29, 174, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("INV00", 2022/06/01, "Flights for CEO", 2000, 20, 400, 2400, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("CN67", 2022/09/06, "Cleaning Services Sept", 160, 20, 32, 192, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("001", 2022/10/10, "Marketing materials for 2022", 130, 20, 26, 156, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("X9FG", 2022/04/10, "Tea and Coffee for boardroom", 70, 20, 14, 84, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("INV002", 2022/03/01, "2022 Auditing", 550, 20, 110, 660, FALSE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("FG004", 2022/03/03, "Cables for IT", 35, 20, 7, 42, FALSE);
-- The below are true values and require a corresponding purchase order. 
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("AB87U", 2022/10/01, "Window Cleaning", 145, 20, 29, 174, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("22AB", 2022/06/01, "Maintenance", 400, 20, 80, 480, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("P9GH66", 2022/06/06, "Sandwiches for Boardroom 2", 130, 20, 26, 156, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("INV095", 2022/09/01, "Telephone Charges September", 70, 20, 14, 84, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("IPA78G", 2022/09/01, "Prep of financial accounts '22", 500, 20, 100, 600, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("FTP78", 2022/08/08, "Keyboard", 60, 20, 12, 72, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("GH6TT", 2022/03/01, "HP laptop", 180, 20, 36, 216, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("XERO06", 2022/03/03, "Leaflets for Stirling Castle", 215, 20, 43, 258, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("XER645", 2022/10/02, "Legal fees Oct", 800, 20, 160, 960, TRUE);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, total_to_pay, status_matched)
VALUES ("QB04", 2022/02/02, "Bulk catering", 145, 20, 29, 174, TRUE);

