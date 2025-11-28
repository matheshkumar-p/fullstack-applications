# Import needed libraries
import flask
from flask import jsonify
from admin_mongo import AdminMongo

class Admin:
    def __init__(self):
        pass

    @staticmethod
    def add_product():
        try:
            product = flask.request.json
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during add product"})

        try:
            AdminMongo.create_record(product['test'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo data insertion"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

    @staticmethod
    def view_product():
        try:
            product = AdminMongo.view_records()
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo data retrieval"})

        return jsonify(product)

    @staticmethod
    def remove_product():
        try:
            product = flask.request.json
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during remove product"})

        try:
            AdminMongo.remove_records(product['test']['productId'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo data deletion"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})