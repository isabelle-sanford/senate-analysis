# imports
import pandas as pd
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func

# Create Engine for census data
path = "resources/AllData.sqlite"
engine = create_engine(f"sqlite:///{path}")
conn = engine.connect()

senate = pd.read_csv('resources/SPopulation1.csv')
attributes = pd.read_csv('resources/CensusAttributesData.csv')
religion = pd.read_csv('resources/ReligiousAffiliationByState.csv')

senate.reset_index().to_sql("senate", con = conn, if_exists = 'replace')
attributes.reset_index().to_sql("attributes", con = conn, if_exists = 'replace')
religion.to_sql("religion", con = conn, if_exists = 'replace')


# why does it need to call from the root folder



# sqlite_table = "attributes"
# conn.execute("CREATE TABLE attributes (id INTEGER PRIMARY KEY AUTOINCREMENT, " +
#          ",".join(["%s REAL" % x for x in attributes.columns]) + ")" )
# senate.to_sql(sqlite_table, conn, if_exists='append')






# create_table_string = conn1.execute('select * from attributes').fetchmany()[0][4]



# def add_pk_to_create_table_string(create_table_string, colname):
#     regex = "(\n.+{}[^,]+)(,)".format(colname)
#     return re.sub(regex, "\\1 PRIMARY KEY,",  create_table_string, count=1)


# conn1 = sqlite3.connect('database')
# c = conn1.curser()

# c.executescript('''
#     PRAGMA foreign_keys=off;

#     BEGIN TRANSACTION;
#     ALTER TABLE attributes RENAME TO old_attributes;

#     /*create a new table with the same column names and types while
#     defining a primary key for the desired column*/
#     CREATE TABLE attributes (col_1 TEXT PRIMARY KEY NOT NULL,
#                             col_2 TEXT);

#     INSERT INTO attributes SELECT * FROM old_attributes;

#     DROP TABLE old_attributes;
#     COMMIT TRANSACTION;

#     PRAGMA foreign_keys=on;''')

# #close out the connection
# c.close()
# conn1.close()