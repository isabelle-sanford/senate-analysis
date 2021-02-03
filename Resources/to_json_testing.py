# IMPORTS
from sqlalchemy.orm import Session, Query
from sqlalchemy import create_engine, inspect, func

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, BigInteger
Base = declarative_base()

import json

# Set connection 
path = "resources/AllData.sqlite"
engine = create_engine(f"sqlite:///{path}")
#conn = engine.connect()

# Inspect table 
inspector = inspect(engine)
#print(inspector.get_table_names())

# get column names
columns_dict = inspector.get_columns('attributes')
cols = [c['name'] for c in columns_dict]
#print(cols)

class Attributes(Base):
    __tablename__ = 'attributes'
    index = Column(BigInteger, primary_key = True)
    SUMLEV = Column(Integer)
    REGION = Column(Integer)
    DIVISION = Column(Integer)
    STATE = Column(Integer)
    NAME = Column(BigInteger)
    SEX = Column(Integer)
    ORIGIN = Column(Integer)
    RACE  = Column(Integer)
    AGE = Column(Integer)
    CENSUS2010POP = Column(BigInteger)
    ESTIMATESBASE2010 = Column(BigInteger)
    POPESTIMATE2010 = Column(BigInteger)
    POPESTIMATE2011 = Column(BigInteger)
    POPESTIMATE2012 = Column(BigInteger)
    POPESTIMATE2013 = Column(BigInteger)
    POPESTIMATE2014 = Column(BigInteger)
    POPESTIMATE2015 = Column(BigInteger)
    POPESTIMATE2016 = Column(BigInteger)
    POPESTIMATE2017 = Column(BigInteger)
    POPESTIMATE2018 = Column(BigInteger)
    POPESTIMATE2019 = Column(BigInteger)

Base.metadata.create_all(engine)


session = Session(bind=engine)
    # row_1 = session.query(Attributes).first()
    # print(row_1)

rows = (
    Query(Attributes)
    .with_session(session)
    .with_entities(Attributes.index, Attributes.NAME, Attributes.STATE, Attributes.SEX, Attributes.ORIGIN, Attributes.RACE, Attributes.AGE, Attributes.POPESTIMATE2019)
    .all()
)
#print(row2)

#x = [dict((cols[i], value) for i, value in enumerate(row_1))]

r = [dict((cols[i], value) for i, value in enumerate(row)) for row in rows]

print(r[2])

# weights = (
#     Query(BaseballPlayer)
#     .join(X, X.player_id = BaseballPlayer.player_id) or whatever
#     .filter(and_(birth_year < 1990, birth_country == "USA"))
#     .with_session(session)
#     .with_entities(BaseballPlayer.birth_country,
#                    func.min(BaseballPlayer.weight)) 
#     .group_by(BaseballPlayer.birth_country) #
#     .all()
# )



#print([r for r in my_table])

#x = [dict((cols[i], value) for i, value in enumerate(row_1))]

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