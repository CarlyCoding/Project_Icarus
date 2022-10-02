from flask import Flask, jsonify, request, redirect
from flask import Blueprint
from repositories.SuppliersRepository import selectAllSuppliers
from repositories.ViewPurchaseOrders_repository import select

Suppliers_blueprint = Blueprint("Suppliers", __name__ )

@Suppliers_blueprint.route("/suppliers", methods =['GET'])
def getAllSuppliers():
    response= jsonify(selectAllSuppliers())
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@Suppliers_blueprint.route("/suppliers/<id>/orders", methods =['GET'])
def SupplierPurchaseOrders(id):
    response= jsonify(select(id))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response