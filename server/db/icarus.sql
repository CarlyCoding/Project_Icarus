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