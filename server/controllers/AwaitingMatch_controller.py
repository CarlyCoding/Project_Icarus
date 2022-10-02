from pickle import jsonify
from flask import Blueprint
from repositories.AwaitingMatch_repository import select

AwaitingMatch_blueprint = Blueprint("AwaitingMatch", __name__)

@AwaitingMatch_blueprint.route("/suppliers/<id>/invoices/unmatched", methods=['GET'])
def SupplierInvoicesUnmatched(id):
    return jsonify(select(id))