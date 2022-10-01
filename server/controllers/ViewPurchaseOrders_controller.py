from flask import Flask, jsonify, request, redirect
from flask import Blueprint
from repositories.ViewPurchaseOrders_repository import select

PurchaseOrders_blueprint = Blueprint("PurchaseOrders", __name__ )

@PurchaseOrders_blueprint.route("/suppliers/<id>/orders", methods =['GET'])
def SupplierPurchaseOrders(id):
    return jsonify(select(id))

