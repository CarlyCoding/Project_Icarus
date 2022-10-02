from db.run_sql import run_sql

from models.AwaitingMatch import AwaitingMatch

def selectUnmatched(supplier_id):
    sql = "SELECT * FROM invoices where supplier_id = %s and status_matched= false"
    values = [supplier_id]
    result = run_sql(sql, values)

#  Need an extra bit about status matched should == false


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