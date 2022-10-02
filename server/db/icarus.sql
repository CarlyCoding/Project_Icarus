DROP TABLE if exists suppliers CASCADE;
DROP TABLE if exists requisitioners CASCADE;
DROP TABLE if exists orders CASCADE;
DROP TABLE if exists invoices CASCADE;

CREATE TABLE suppliers(
    supplier_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE requisitioners(
    requisitioner_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    department_code VARCHAR(255)
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    date date, 
    po_number INT,
    description_of_goods VARCHAR,
    full_amount_raised INT,
    receipted_amount INT,
    tax_rate INT,
    requisitioner_id INT references requisitioners,
    supplier_id INT references suppliers
);

CREATE TABLE invoices(
    invoice_number VARCHAR(255),
    date_of_invoice date,
    description_of_goods VARCHAR(255),
    pre_tax INT,
    tax_rate INT,
    tax_to_pay INT,
    total_to_pay INT,
    status_matched BOOLEAN,
    supplier_id INT references suppliers,
    order_id INT references orders
);

INSERT INTO suppliers (name) VALUES ('Hewlett Packard');
INSERT INTO suppliers (name) VALUES ('Pertemps');
INSERT INTO suppliers (name) VALUES ('Lyreco');
INSERT INTO suppliers (name) VALUES ('Scottish Power');
INSERT INTO suppliers (name) VALUES ('Redfern Travel');
INSERT INTO suppliers (name) VALUES ('Benugo');
INSERT INTO suppliers (name) VALUES ('Costa Coffee');
INSERT INTO suppliers (name) VALUES ('Costco');
INSERT INTO suppliers (name) VALUES ('Mitie Cleaning');
INSERT INTO suppliers (name) VALUES ('S1 Marketing');
INSERT INTO suppliers (name) VALUES ('Deloitte Accounting');
INSERT INTO suppliers (name) VALUES ('BT');
INSERT INTO suppliers (name) VALUES ('Harper MacLeod');

INSERT INTO requisitioners (name, department_code) VALUES ('Maurice Moss', 'IT');
INSERT INTO requisitioners (name, department_code) VALUES ('Jenn Barber', 'MG');
INSERT INTO requisitioners (name, department_code) VALUES ('Roy', 'IT');
INSERT INTO requisitioners (name, department_code) VALUES ('Douglas Renholm', 'CO');
INSERT INTO requisitioners (name, department_code) VALUES ('Richmond','AD');


INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/09/08', 145, 'IT Peripherals', 200, 150, 20, 1, 1);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/09/12', 146, 'Stationery', 700, 400, 20, 5, 3);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/06/08', 147, 'Travel Expenses', 1000, 900, 20, 2, 5);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/04/10', 148, 'Catering (small)', 150, 150, 20, 1, 6);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/03/07', 149, 'Coffees', 125, 50, 20, 3, 7);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/03/06', 150, 'Legal Fees', 700, 500, 20, 4, 13);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/09/16', 151, 'Legal Fees', 800, 400, 20, 5, 13);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/09/08', 152, 'Legal Fees', 2300, 2150, 20, 5, 13);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/09/06', 153, 'Financial Services', 800, 400, 20, 5, 11);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/09/02', 154, 'Cleaning Fees', 350, 150, 20, 5, 9);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/07/06', 155, 'Catering (bulk)', 1300, 1000, 20, 3, 8);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/07/06', 155, 'Power Charges', 1300, 1000, 20, 3, 4);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/07/06', 155, 'Staffing costs', 1300, 1000, 20, 3, 2);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/07/06', 155, 'IT costs', 1300, 1000, 20, 3, 1);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/07/06', 155, 'Marketing expenses', 1300, 1000, 20, 3, 10);
INSERT INTO orders (date, po_number, description_of_goods, full_amount_raised, receipted_amount, tax_rate, requisitioner_id, supplier_id) VALUES ('2022/07/06', 155, 'Phone charges', 1300, 1000, 20, 3, 12);



INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('INV476', '2022/07/01', 'New monitor for accounts', 145, 20, 29, 174, FALSE, 1, 1);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('INV590', '2022/05/01', 'Finance stationary', 125, 20, 25, 150, FALSE, 3, 2);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('INV465', '2022/09/01', 'Boardroom projector', 145, 20, 29, 174, FALSE, 1, 14);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('INV00', '2022/06/01', 'Flights for CEO', 2000, 20, 400, 2400, FALSE, 5, 3);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('CN67', '2022/09/06', 'Cleaning Services Sept', 160, 20, 32, 192, FALSE, 9, 10);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('001', '2022/10/10', 'Marketing materials for 2022', 130, 20, 26, 156, FALSE, 10, 15);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('X9FG', '2022/04/10', 'Tea and Coffee for boardroom', 70, 20, 14, 84, FALSE, 6, 4);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('INV002', '2022/03/01', '2022 Auditing', 550, 20, 110, 660, FALSE, 11, 9);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('FG004', '2022/03/03', 'Cables for IT', 35, 20, 7, 42, FALSE, 1, 14);

INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('AB87U', '2022/10/01', 'Window Cleaning', 145, 20, 29, 174, TRUE, 9, 10);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('22AB', '2022/06/01', 'Maintenance', 400, 20, 80, 480, TRUE, 4, 12);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('P9GH66', '2022/06/06', 'Sandwiches for Boardroom 2', 130, 20, 26, 156, TRUE, 6, 4);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('INV095', '2022/09/01', 'Telephone Charges September', 70, 20, 14, 84, TRUE, 12, 16);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('IPA78G', '2022/09/01', 'Prep of financial accounts 22', 500, 20, 100, 600, TRUE, 11, 9);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('FTP78', '2022/08/08', 'Keyboard', 60, 20, 12, 72, TRUE, 1, 14);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('GH6TT', '2022/03/01', 'HP laptop', 180, 20, 36, 216, TRUE, 1, 14);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('XERO06', '2022/03/03', 'Leaflets for Stirling Castle', 215, 20, 43, 258, TRUE, 10, 15);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('XER645', '2022/10/02', 'Legal fees Oct', 800, 20, 160, 960, TRUE, 13, 6);
INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES ('QB04', '2022/02/02', 'Bulk catering', 145, 20, 29, 174, TRUE, 8, 11);

