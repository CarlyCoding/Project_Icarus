from crypt import methods
import json
from urllib import response
from flask import Flask, jsonify, request, redirect
from flask import Blueprint
from repositories.Orders_repository import select
from repositories.Invoices_repository import addInvoice
from repositories.Invoices_repository import getInvoicesAtTrue
from repositories.Invoices_repository import getInvoices, getInvoiceByInvoiceNumber, matchInvoice, getOrder

Invoices_blueprint = Blueprint("Invoices", __name__ )

@Invoices_blueprint.route("/invoices", methods =['POST', "OPTIONS"])
def addNewInvoice():
    if request.method.lower()== "post":

        invoice= request.get_json()
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
@Invoices_blueprint.route("/invoices/<invoice_number>", methods= ['GET'])
def  getByInvoiceNumber(invoice_number):
    response= jsonify(getInvoiceByInvoiceNumber(invoice_number))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

# Just single GET 
@Invoices_blueprint.route("/invoices", methods= ['GET'])
def getAllInvoices():
    response= jsonify(getInvoices())
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

# Have a POST for matched invoices
@Invoices_blueprint.route("/invoices/<invoice_number>/match", methods =['POST', "OPTIONS"])
def matchSelectedInvoice(invoice_number):
    if request.method.lower()== "post":

        invoice= request.get_json()
        matchInvoice(invoice_number)
    # Response is defined here as CORS requires it.
    response=jsonify([])
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    return response

# RecursionError: maximum recursion depth exceeded while calling a Python object
# Put notes about this error- the method is calling itself eg. controller method and repo method had the same name 


# For the orders side of the matching

@Invoices_blueprint.route("/invoices/<invoice_number>/order", methods= ['GET'])
def  getOrderForInvoice(invoice_number):
    response= jsonify(getOrder(invoice_number))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response