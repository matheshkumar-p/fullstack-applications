# Import needed libraries
import pymongo
from bson.objectid import ObjectId

class AdminMongo:
    def __init__(self):
        pass

    @staticmethod
    def credential():
        client = pymongo.MongoClient(
            f"mongodb+srv://admin:admin@admin.7iagg.mongodb.net/ComputerAccessories?ssl=true&ssl_cert_reqs=CERT_NONE")
        dataBase = client["ComputerAccessories"]
        return dataBase

    @staticmethod
    def create_record(product_details):
        dataBase = AdminMongo.credential()
        collection = dataBase["Products"]
        collection.insert_one(product_details)

    @staticmethod
    def view_records():
        products = {'products': {}}
        dataBase = AdminMongo.credential()
        for product in enumerate(dataBase["Products"].find({})):
            products["products"][str(product[1].pop('_id'))] = product[1]
        return products

    @staticmethod
    def remove_records(product_ids):
        dataBase = AdminMongo.credential()
        collection = dataBase["Products"]
        for ids in product_ids:
            collection.delete_one({"_id": ObjectId(ids)})