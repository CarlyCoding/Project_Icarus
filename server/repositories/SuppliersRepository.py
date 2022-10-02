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