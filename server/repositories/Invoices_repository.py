from optparse import Values
from db.run_sql  import run_sql

def addInvoice(invoice):
    sql='select supplier_id, order_id FROM orders where po_number= %s'
    values= [invoice["po_number"]]
    result= run_sql(sql, values)[0]
    
    supplier_id = result[0]
    order_id = result[1]
    sql = """INSERT INTO invoices(invoice_number, date_of_invoice, description_of_goods, pre_tax, tax_rate, tax_to_pay, total_to_pay, status_matched, supplier_id, order_id)
VALUES (%s, %s, %s, %s, %s, %s, %s, FALSE, %s, %s);"""
    values = [
        invoice["invoice_number"], 
        invoice["invoice_date"], 
        invoice["goods_description"], 
        invoice["net_amount"], 
        invoice["tax_rate"], 
        invoice["tax_to_pay"],
        invoice["total_to_pay"], 
        supplier_id, 
        order_id]
    result = run_sql(sql, values)


def getInvoicesAtTrue():
    sql= 'SELECT * FROM invoices where status_matched= TRUE'
    values= []
    result= run_sql(sql, values)

    invoices = []
    for row in result:
        invoices.append({
            'invoice_number': row['invoice_number'],
            'invoice_date': row['date_of_invoice'],
            'description_of_goods': row['description_of_goods'],
            'pre_tax': row['pre_tax'],
            'tax_rate': row['tax_rate'],
            'tax_to_pay': row ['tax_to_pay'],
            'total_to_pay': row ['total_to_pay']
        })
    return invoices

# This is for the matching screen from here forward
# Get invoice by invoice number 

def getInvoicesByInvoiceNumber(invoice_number):
    sql= 'SELECT * FROM invoices where invoice_number = %s'
    values = [invoice_number]
    result = (sql, run_sql)

    invoices = []
    for row in result:
        invoices.append({
            'invoice_number': row['invoice_number'],
            'invoice_date': row ['date_of_invoice'],
            'description of goods': row['description_of_goods'],
            'pre_tax': ['pre_tax'],
            'tax_rate': ['tax_rate'],
            'tax_to_pay': ['tax_to_pay'],
            'total_to_pay': ['total_to_pay']
        })
    return invoices


# Basic GET
# Have a POST for the matched invoices. 