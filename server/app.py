from flask import Flask
from flask_cors import CORS
from controllers.SuppliersController import Suppliers_blueprint
from controllers.InvoicesController import Invoices_blueprint
from controllers.OrdersController import Orders_blueprint


app = Flask(__name__)
app.register_blueprint(Suppliers_blueprint)
app.register_blueprint(Invoices_blueprint)
app.register_blueprint(Orders_blueprint)

if __name__ == '__main__':
    app.run(debug=True)

