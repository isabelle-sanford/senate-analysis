from flask import Flask, render_template, redirect
import scrape_mars



# Create an instance of Flask
app = Flask(__name__)



@app.route("/")
def index():
    mars = scrape_mars.scrape()
    return render_template("index.html", mars = mars)

# @app.route("/scrape")
# def scrape():
#     mars = mongo.db.mars 
#     mars_data = scrape_mars.scrape()
#     mars.update({}, mars_data, upsert=True)
#     return redirect("http://localhost:5000/", code=302)

# # Route that will trigger the scrape function
# @app.route("/scrape")
# def scrape():

#     # Run the scrape function
#     mars_data = scrape_mars.scrape()

#     # Update the Mongo database using update and upsert=True
#     mongo.db.mars.update({}, {"$set":mars_data}, upsert=True)

#     # Redirect back to home page
#     return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)