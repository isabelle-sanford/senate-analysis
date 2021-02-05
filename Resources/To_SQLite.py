# imports
import pandas as pd
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func

# Create Engine for census data
path = "resources/AllData.sqlite"
engine = create_engine(f"sqlite:///{path}")
conn = engine.connect()

senate = pd.read_csv('resources/SPopulation.csv')
attributes = pd.read_csv('resources/CensusAttributesData.csv')
religion = pd.read_csv('resources/ReligiousAffiliationByState.csv')

# this can definitely be done better
columns = religion.columns 
columns = [i.replace(' ', '_') for i in columns]
columns = [i.replace('(', '') for i in columns]
columns = [i.replace(')', '') for i in columns]
columns = [i.replace("'", '_') for i in columns]
columns = [i.replace("-", '_') for i in columns]
columns = [i.replace("/", '_') for i in columns]
religion.columns = columns

senate.reset_index().to_sql("senate", con = conn, if_exists = 'replace')
attributes.reset_index().to_sql("attributes", con = conn, if_exists = 'replace')
religion.to_sql("religion", con = conn, if_exists = 'replace')


# why does it need to call from the root folder

