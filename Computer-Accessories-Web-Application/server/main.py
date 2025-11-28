# Import needed libraries
from flask import Flask
from flask_restful import Api
from admin import Admin
from user import User

# Flask app creation
app = Flask(__name__)
api = Api(app)

# Admin route functions
app.add_url_rule('/admin/add/', view_func=Admin.add_product, methods=['POST'])
app.add_url_rule('/admin/view/', view_func=Admin.view_product, methods=['GET'])
app.add_url_rule('/admin/remove/', view_func=Admin.remove_product, methods=['POST'])

# User route functions,
app.add_url_rule('/user/signup/', view_func=User.sign_up, methods=['POST'])
app.add_url_rule('/user/email-verify/', view_func=User.email_verification, methods=['POST'])
app.add_url_rule('/user/signin/', view_func=User.sign_in, methods=['POST'])
app.add_url_rule('/user/order/', view_func=User.order_products, methods=['GET'])
app.add_url_rule('/user/cancel/', view_func=User.order_cancel, methods=['GET'])
app.add_url_rule('/user/track/', view_func=User.order_track, methods=['GET'])

# Python main function
if __name__ == '__main__':
    app.run(debug=True)