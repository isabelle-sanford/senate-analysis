# IMPORTS
from sqlalchemy.orm import Session, Query
from sqlalchemy import create_engine, inspect, func

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, BigInteger

import json

# Set connection 
path = "resources/AllData.sqlite"
engine = create_engine(f"sqlite:///{path}")
#conn = engine.connect()

Base = declarative_base()




class Senate(Base):
    __tablename__ = 'senate'
    index = Column(Integer, primary_key = True)
    st = Column(String(10)) 
    state = Column(String(50))
    senator = Column(String(100))
    party = Column(String(100))
    born = Column(Integer) # change name to Age
    assumed_office = Column(String(100)) # technically date
    term_up = Column(Integer)
    population = Column(BigInteger)
    gender = Column(Integer)
    race = Column(Integer)


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

# Inspect table 
inspector = inspect(engine)
#print(inspector.get_table_names())

types_dict = {'TEXT': 'String(100)', 'BIGINT': 'BigInteger', 'FLOAT': 'Float'}

# get column names
columns_dict = inspector.get_columns('religion')
cols = [c['name'] for c in columns_dict[1:]]
col_types = [types_dict[str(c['type'])] for c in columns_dict[1:]]
#print(cols)

class_str = [f'{cols[i]} = Column({col_types[i]})' for i in range(len(cols))]
#rint('\n'.join(class_str))

#print(class_str)

class Religion(Base):
    __tablename__ = 'religion'
    
    index = Column(BigInteger, primary_key = True)
    State = Column(String(100))
    Baptist_Family_ET = Column(String(100))
    Methodist_Family_ET = Column(String(100))
    Non_denominational_Family_ET = Column(String(100))
    Lutheran_Family_ET = Column(String(100))
    Presbyterian_ET = Column(String(100))
    Pentecostal_Family_ET = Column(String(100))
    Episcopalian_Anglican_Family_ET = Column(String(100))
    Restorationist_Family_ET = Column(String(100))
    Congregationalist_Family_ET = Column(String(100))
    Holiness_Family_ET = Column(String(100))
    Reformed_Family_ET = Column(String(100))
    Adventist_Family_ET = Column(String(100))
    Anabaptist_Family_ET = Column(String(100))
    Pietist_Family_ET = Column(String(100))
    Other_Evangelical = Column(String(100))
    NonSpecific_Protestant_Family_ET = Column(String(100))
    Baptist_Family_MT = Column(String(100))
    Methodist_Family_MT = Column(String(100))
    Non_Denominational_Family_MT = Column(String(100))
    Lutheran_Family_MT = Column(String(100))
    Presbyterian_Family_MT = Column(String(100))
    Episcopalian_Anglican_Family_MT = Column(String(100))
    Restorationist_Family_MT = Column(String(100))
    Congregationalist_Family_MT = Column(String(100))
    Reformed_Family_MT = Column(String(100))
    Anabaptist_Family_MT = Column(String(100))
    Friends_Family_MT = Column(String(100))
    NonSpecific_Protestant_Family_MT = Column(String(100))
    Baptist_Family_HBPT = Column(String(100))
    Methodist_Family_HBPT = Column(String(100))
    Pentecostal_Family_HBPT = Column(String(100))
    Holiness_Family_HBPT = Column(String(100))
    Non_Denominational_Family_HBPT = Column(String(100))
    NonSpecific_Protestant_HBPT = Column(String(100))
    Catholic = Column(BigInteger)
    Mormon_LDS = Column(String(100))
    Other_Mormom = Column(String(100))
    Greek_Orthodox = Column(String(100))
    Russian_Orthodox = Column(String(100))
    Orthodox_Church_in_America = Column(String(100))
    Other_Orthodox_Christian = Column(String(100))
    Jehovah_s_Witness = Column(String(100))
    Other_Christian = Column(String(100))
    Jewish = Column(String(100))
    Muslim = Column(String(100))
    Buddhist = Column(String(100))
    Hindu = Column(String(100))
    Other_World_Religions = Column(String(100))
    Unitarians = Column(String(100))
    New_Age = Column(String(100))
    Native_American_Religions = Column(String(100))
    Atheist = Column(BigInteger)
    Agnostic = Column(BigInteger)
    Nothing_in_Particular = Column(Float)
  


# INTO JSON-------------

Base.metadata.create_all(engine)
session = Session(bind=engine)


senate_rows = (
    Query(Senate)
    .with_session(session)
    .with_entities(Senate.index, 
        Senate.st, # MERGE INTO SPOPULATION CSV
        Senate.state, 
        Senate.senator, 
        Senate.party, 
        Senate.population,
        Senate.gender,
        Senate.race) # leaving out term_up and assumed_office and born for now
    .all()
)
senate_cols = ['index', 'st', 'state', 'senator', 'party', 'population', 'gender', 'race']
senate_json_init = [dict((senate_cols[i], value) for i, value in enumerate(row)) for row in senate_rows]
sen_json_output = json.dumps(senate_json_init)

def sen_json():
    return sen_json_output


attribute_rows = (
    Query(Attributes)
    .with_session(session)
    .with_entities(Attributes.index, Attributes.NAME, Attributes.STATE, Attributes.SEX, Attributes.ORIGIN, Attributes.RACE, Attributes.AGE, Attributes.POPESTIMATE2019)
    .all()
)
attribute_cols = ['index', 'NAME', 'STATE', 'SEX', 'ORIGIN', 'RACE', 'AGE', 'POPESTIMATE2019']
attr_json_init = [dict((attribute_cols[i], value) for i, value in enumerate(row)) for row in attribute_rows]
attr_json_output = json.dumps(attr_json_init)

# TODO: AUTOMATE EVERYTHING function for this query, just get all rows, function for putting inspected cols into base class...
# import religion stuff below
# function to create query w all cols

def attr_json():
    return attr_json_output


relig_rows = (
    Query(Religion)
    .with_session(session)
    .with_entities(Religion.index, 
        Religion.State, 
        Religion.Catholic, 
        Religion.Jewish, 
        Religion.Muslim,
        Religion.Buddhist,
        Religion.Hindu,
        Religion.Agnostic) 
    .all()
)
relig_cols = ['index', 'state', 'catholic', 'jewish', 'muslim', 'buddhist', 'hindu', 'agnostic']
relig_json_init = [dict((relig_cols[i], value) for i, value in enumerate(row)) for row in relig_rows]
relig_json_output = json.dumps(relig_json_init)

def relig_json():
    return relig_json_output



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

