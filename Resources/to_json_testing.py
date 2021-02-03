# IMPORTS
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
from sqlalchemy.ext.automap import automap_base

import json
#import psycopg2

# Set connection 
path = "resources/AllData.sqlite"
engine = create_engine(f"sqlite:///{path}")
conn = engine.connect()

# Inspect table 
inspector = inspect(engine)
#print(inspector.get_table_names())

# get column names
columns_dict = inspector.get_columns('senate')
cols = [c['name'] for c in columns_dict]
#print(cols)

# reflect into classes with automap
Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(bind=engine)

Senate = Base.classes.senate

my_table = session.query(Senate).all()
print(my_table)


#print([r for r in my_table])

# r = [dict((cols[i], value) for i, value in enumerate(row)) for row in my_table]

# print(r)


# inspector = inspect(engine)

# tables = inspector.get_table_names()

# for t in tables:
#     my_table = session.query(t)
#     columns_dict = inspector.get_columns(t)
#     cols = [c['name'] for c in columns_dict]

#     # for column in columns:
#     #     print(column["name"], column["type"])

#     r = [dict((cols[i], value) for i, value in enumerate(row)) for row in my_table]

#     print(r)

    # my_query = query_db("select * from senate")

    # json_output = json.dumps(my_query)