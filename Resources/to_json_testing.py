# IMPORTS
from sqlalchemy.orm import Session, Query
from sqlalchemy import create_engine, inspect, func

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, BigInteger

import json

def get_jsons():

    # Set connection 
    path = "resources/AllData.sqlite"
    engine = create_engine(f"sqlite:///{path}")
    #conn = engine.connect()

    # Inspect table 
    # inspector = inspect(engine)
    # #print(inspector.get_table_names())

    # # get column names
    # columns_dict = inspector.get_columns('attributes')
    # cols = [c['name'] for c in columns_dict]
    #print(cols)

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
            Senate.gender) # leaving out term_up and assumed_office and born for now
        .all()
    )
    senate_cols = ['index', 'st', 'state', 'senator', 'party', 'population', 'gender']
    senate_json = [dict((senate_cols[i], value) for i, value in enumerate(row)) for row in senate_rows]

    sen_json_output = json.dumps(senate_json)


    attribute_rows = (
        Query(Attributes)
        .with_session(session)
        .with_entities(Attributes.index, Attributes.NAME, Attributes.STATE, Attributes.SEX, Attributes.ORIGIN, Attributes.RACE, Attributes.AGE, Attributes.POPESTIMATE2019)
        .all()
    )
    attribute_cols = ['index', 'NAME', 'STATE', 'SEX', 'ORIGIN', 'RACE', 'AGE', 'POPESTIMATE2019']
    attr_json = [dict((attribute_cols[i], value) for i, value in enumerate(row)) for row in attribute_rows]

    # TODO: AUTOMATE EVERYTHING function for this query, just get all rows, function for putting inspected cols into base class...
    # import religion stuff below

    print(senate_json[3])

    return sen_json_output



# key integer NOT NULL,
#     st character varying(10) NOT NULL,
#     state character varying(50) NOT NULL,
#     "baptist_family_(et)" integer NOT NULL,
#     "methodist_family_(et)" integer NOT NULL,
#     "non_denominational_family_(et)" integer NOT NULL,
#     "lutheran_family_(et)" integer NOT NULL,
#     "presbyterian_(et)" integer NOT NULL,
#     "pentecostal_family_(et)" integer NOT NULL,
#     "episcopalian/anglican_family_(et)" integer NOT NULL,
#     "restorationist_family_(et)" integer NOT NULL,
#     "congregationalist_family_(et)" integer NOT NULL,
#     "holiness_family_(et)" integer NOT NULL,
#     "reformed_family_(et)" integer NOT NULL,
#     "adventist_family_(et)" integer NOT NULL,
#     "anabaptist_family_(et)" integer NOT NULL,
#     "pietist_family_(et)" integer NOT NULL,
#     other_evangelical integer NOT NULL,
#     "nonspecific_protestant_family_(et)" integer NOT NULL,
#     "baptist_family_(mt)" integer NOT NULL,
#     "methodist_family_(mt)" integer NOT NULL,
#     "non-denominational_family_(mt)" integer NOT NULL,
#     "lutheran_family_(mt)" integer NOT NULL,
#     "presbyterian_family_(mt)" integer NOT NULL,
#     "episcopalian/anglican_family_(mt)" integer NOT NULL,
#     "restorationist_family_(mt)" integer NOT NULL,
#     "congregationalist_family_(mt)" integer NOT NULL,
#     "reformed_family_(mt)" integer NOT NULL,
#     "anabaptist_family_(mt)" integer NOT NULL,
#     "friends_family_(mt)" integer NOT NULL,
#     "nonspecific_protestant_family_(mt)" integer NOT NULL,
#     "baptist_family_(hbpt)" integer NOT NULL,
#     "methodist_family_(hbpt)" integer NOT NULL,
#     "pentecostal_family_(hbpt)" integer NOT NULL,
#     "holiness_family_(hbpt)" integer NOT NULL,
#     "non-denominational_family_(hbpt)" integer NOT NULL,
#     "nonspecific_protestant_(hbpt)" integer NOT NULL,
#     catholic integer NOT NULL,
#     "mormon-lds" integer NOT NULL,
#     other_mormom integer NOT NULL,
#     greek_orthodox integer NOT NULL,
#     russian_orthodox integer NOT NULL,
#     orthodox_church_in_america integer NOT NULL,
#     other_orthodox_christian integer NOT NULL,
#     "jehovah's_witness" integer NOT NULL,
#     other_christian integer NOT NULL,
#     jewish integer NOT NULL,
#     muslim integer NOT NULL,
#     buddhist integer NOT NULL,
#     hindu integer NOT NULL,
#     other_world_religions integer NOT NULL,
#     unitarians integer NOT NULL,
#     new_age integer NOT NULL,
#     native_american_religions integer NOT NULL,
#     atheist integer NOT NULL,
#     agnostic integer NOT NULL,
#     nothing_in_particular integer NOT NULL



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

