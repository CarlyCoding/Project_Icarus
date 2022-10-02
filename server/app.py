from flask import Flask
from controllers.SuppliersController import Suppliers_blueprint

app = Flask(__name__)
app.register_blueprint(Suppliers_blueprint)

if __name__ == '__main__':
    app.run(debug=True)

