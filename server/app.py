from flask import Flask

from controllers.ViewPurchaseOrders_controller import PurchaseOrders_blueprint

app = Flask(__name__)

app.register_blueprint(PurchaseOrders_blueprint)

if __name__ == '__main__':
    app.run(debug=True)

