import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, Float

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

# Create Database Connection to postgres
username = 'postgres'
password = '320820'
database = 'Senate_final'
connection_string = f"{username}:{password}@localhost:5432/{database}"
engine = create_engine(f'postgresql://{connection_string}')
Base.metadata.create_all(engine)


# create connection
conn = engine.connect()
# read senate sql table as pd dataframe
senate = pd.read_sql("SELECT * FROM senate", conn)


# # scrape()
def scrape():
    scrape_data = {}
    scrape_data['mars_fac'] = mars_fac()

    return scrape_data


# # Mars Facts
def mars_fac ():

    df_mars = pd.read_sql("SELECT * FROM senate", conn)
    # df_mars.columns=["description", "value"]

    # convert dataFrames to HTML tables
    mars_html_table = df_mars.to_html(index = False)

    return mars_html_table