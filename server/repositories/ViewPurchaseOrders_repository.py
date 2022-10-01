from db.run_sql  import run_sql

from models.PurchaseOrder import PurchaseOrder

def select(supplier_id):
    sql = "SELECT * FROM orders where supplier_id = %s"
    values = [supplier_id]
    result = run_sql(sql, values)

    orders = []
    for row in result:
        orders.append({
            'po_number': row['po_number'], 
            'id': row['id'], 
            'date': row['date'], 
            'full_amount_raised': row['full_amount_raised'], 
            'receipted_amount': row['receipted_amount'], 
            'tax_rate': row['tax_rate']
        })

    return orders