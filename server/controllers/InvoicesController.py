from crypt import methods
import json
from urllib import response
from flask import Flask, jsonify, request, redirect
from flask import Blueprint
from repositories.SuppliersRepository import selectAllSuppliers
from repositories.Orders_repository import select
from repositories.Invoices_repository import addInvoice
from repositories.Invoices_repository import getInvoicesAtTrue
from server.repositories.Invoices_repository import getInvoicesByInvoiceNumber

Invoices_blueprint = Blueprint("Invoices", __name__ )

@Invoices_blueprint.route("/invoices", methods =['POST', "OPTIONS"])
def addNewInvoice():
    if request.method.lower()== "post":

        invoice= request.get_json()
        print(invoice)
        addInvoice(invoice)
    # Response is defined here as CORS requires it.
    response=jsonify([])
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    return response

@Invoices_blueprint.route("/invoices/matched", methods= ['GET'])
def getMatchedInvoices():
    response= jsonify(getInvoicesAtTrue())
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# have a get by invoice number
@Invoices_blueprint.route("invoices/<invoice_number>/match", methods['GET'])
def  getByInvoiceNumber(invoice_number):
    response= jsonify(getInvoicesByInvoiceNumber(invoice_number))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

# Just single GET 
# Have a POST for matched invoices