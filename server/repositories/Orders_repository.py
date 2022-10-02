from db.run_sql  import run_sql

def select(supplier_id):
    sql = "SELECT * FROM orders where supplier_id = %s"
    values = [supplier_id]
    result = run_sql(sql, values)

    orders = []
    for row in result:
        orders.append({
            'po_number': row['po_number'], 
            'id': row['order_id'], 
            'date': row['date'],
            'description': row['description_of_goods'],
            'full_amount_raised': row['full_amount_raised'], 
            'receipted_amount': row['receipted_amount'], 
            'tax_rate': row['tax_rate']
        })
    return orders

def selectSupplierName(po_number):
    sql = """SELECT name FROM suppliers 
             join orders on orders.supplier_id = suppliers.supplier_id 
             where orders.po_number= %s"""
    values = [po_number]
    result = run_sql(sql, values)
    return result