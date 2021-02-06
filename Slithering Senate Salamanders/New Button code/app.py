# 1. Import Flask
from flask import Flask, render_template, redirect
import to_json_testing as data_jsons
# import jpeg's
import os
from random import choice
from flask import url_for, render_template


# SQL CONNECTION HERE


# 2. Create an app
app = Flask(__name__)



# BASICS
# 3. Define static routes
@app.route("/")
def index():
    return render_template('SlitheringSenateSalamanders.html')



@app.route("/api/sen")
def sen_data():

    # SQL to json guide: https://stackoverflow.com/questions/3286525/return-sql-table-as-json-in-python 

    # add json to the /api route

    # go back to main when done
    return data_jsons.sen_json()

@app.route("/api/attr")
def attr_data():

    # SQL to json guide: https://stackoverflow.com/questions/3286525/return-sql-table-as-json-in-python 

    # add json to the /api route

    # go back to main when done
    return data_jsons.attr_json()


@app.route("/api/relig")
def relig_json():

    # SQL to json guide: https://stackoverflow.com/questions/3286525/return-sql-table-as-json-in-python 

    # add json to the /api route

    # go back to main when done
    return data_jsons.relig_json()

# more routes to include:
# other senate reform pages, any other stretch stuff


# USEFUL EXAMPLE STUFF-------------------
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

# code for jpeg import
@app.route('/random_image')
def random_image():
    names = os.listdir(os.path.join(app.static_folder, 'img\Headshots\headshots'))
    # img_url = url_for('static', filename=os.path.join('img\Headshots\headshots', choice(names)))
    return render_template('random_image.html', names=names)


# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)