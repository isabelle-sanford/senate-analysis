# 1. Import Flask

from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from plots.PlotPopScript import party_bar, chamber, pop_bar # will be importing funcs once database/json is here


# SQL CONNECTION HERE


# 2. Create an app
app = Flask(__name__)



# BASICS
# 3. Define static routes
@app.route("/")
def index():
    return render_template('SlitheringSenateSalamanders.html')

# templates\SlitheringSenateSalamanders.html
# C:\Users\Isabelle Sanford\Documents\BootCamp\senate-analysis\templates\SlitheringSenateSalamanders.html

@app.route("/api")
def populate():

    # populate SQL database with our thing? jsonified? 

    return redirect('/')

# more routes to include:
# other senate reform pages, any other stretch stuff


# GOOD EXAMPLE STUFF-------------------
# VARIABLES
# @app.route("/api/v1.0/justice-league/<real_name>")
# def justice_league_character(real_name):
#     """Fetch the Justice League character whose real_name matches
#        the path variable supplied by the user, or a 404 if not."""

#     canonicalized = real_name.replace(" ", "").lower()
#     for character in justice_league_members:
#         search_term = character["real_name"].replace(" ", "").lower()

#         if search_term == canonicalized:
#             return jsonify(character)

#     return jsonify({"error": f"Character with real_name {real_name} not found."}), 404

# # Route to render index.html template using data from Mongo
# @app.route("/")
# def home():

#     # Find one record of data from the mongo database
#     destination_data = mongo.db.collection.find_one()

#     # Return template and data
#     return render_template("index.html", vacation=destination_data)




# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)