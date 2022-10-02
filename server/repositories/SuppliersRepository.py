from db.run_sql  import run_sql

def selectAllSuppliers():
    sql = "SELECT * FROM suppliers"
    values = []
    result = run_sql(sql, values)

    suppliers = []
    for row in result:
        suppliers.append({
            'id': row['supplier_id'], 
            'name': row['name']
        })

    return suppliers

def selectUnmatchedInvoices(supplier_id):
    sql = "SELECT * FROM invoices where status_matched = FALSE and supplier_id = %s"
    values = [supplier_id]
    result = run_sql(sql, values)

    invoices = []
    for row in result:
        invoices.append({
            'invoice_number': row['invoice_number'],
            'date_of_invoice': row['date_of_invoice'],
            'description_of_goods': row['description_of_goods'],
            'pre_tax': row['pre_tax'],
            'tax_rate': row['tax_rate'],
            'tax_to_pay': row['tax_to_pay'],
            'total_to_pay': row['total_to_pay'],
            'status_matched': row['status_matched']
            })
            
    return invoices
