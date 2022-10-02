from flask import Flask, jsonify, request, redirect
from flask import Blueprint
from repositories.SuppliersRepository import selectAllSuppliers
from repositories.Orders_repository import select
from repositories.Orders_repository import selectSupplierName

Orders_blueprint = Blueprint("Orders", __name__ )


@Orders_blueprint.route("/orders/<po_number>/supplierName", methods =['GET'])
def PurchaseOrderSupplierName(po_number):
    response= jsonify(selectSupplierName(po_number))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response