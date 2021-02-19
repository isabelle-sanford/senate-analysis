# 1. Import Flask
from flask import Flask, render_template, redirect, jsonify
import to_json_testing as data_jsons
from religion_cleaning import relig_dict

# SQL CONNECTION HERE


# 2. Create an app
app = Flask(__name__)



# BASICS
# 3. Define static routes
@app.route("/")
def index():
    return render_template('index.html')



@app.route("/api/sen")
def sen_data():



    # go back to main when done
    return data_jsons.sen_json()

@app.route("/api/attr")
def attr_data():



    # go back to main when done
    return data_jsons.attr_json()


@app.route("/api/relig")
def relig_json():


    # go back to main when done
    return jsonify(relig_dict)



@app.route("/about")
def about():
    return render_template('about.html')

# more routes to include:
# other senate reform pages, any other stretch stuff






# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)