-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "sex" (
    "s_key" varchar(10)   NOT NULL,
    "sex" varchar(10)   NOT NULL,
    CONSTRAINT "pk_sex" PRIMARY KEY (
        "s_key"
     )
);

CREATE TABLE "age" (
    "a_key" varchar(10)   NOT NULL,
    "age_range" varchar(10)   NOT NULL,
    "generation" varchar(10)   NOT NULL,
    CONSTRAINT "pk_age" PRIMARY KEY (
        "a_key"
     )
);

CREATE TABLE "division" (
    "d_key" varchar(10)   NOT NULL,
    "division" varchar(50)   NOT NULL,
    CONSTRAINT "pk_division" PRIMARY KEY (
        "d_key"
     )
);

CREATE TABLE "origin" (
    "o_key" varchar(10)   NOT NULL,
    "origin" varchar(50)   NOT NULL,
    CONSTRAINT "pk_origin" PRIMARY KEY (
        "o_key"
     )
);

CREATE TABLE "race" (
    "r_key" varchar(10)   NOT NULL,
    "race" varchar(50)   NOT NULL,
    "race2" varchar(50)   NOT NULL,
    CONSTRAINT "pk_race" PRIMARY KEY (
        "r_key"
     )
);

CREATE TABLE "state" (
    "st_key" varchar(10)   NOT NULL,
    "st" varchar(50)   NOT NULL,
    "state" varchar(50)   NOT NULL,
    CONSTRAINT "pk_state" PRIMARY KEY (
        "st_key"
     )
);

CREATE TABLE "population" (
    "p_key" int   NOT NULL,
    "sumlev" varchar(50)   NOT NULL,
    "region" varchar(50)   NOT NULL,
    "division" varchar(10)   NOT NULL,
    "state" varchar(10)   NOT NULL,
    "name" varchar(50)   NOT NULL,
    "sex" varchar(10)   NOT NULL,
    "origin" varchar(10)   NOT NULL,
    "race" varchar(10)   NOT NULL,
    "age" varchar(10)   NOT NULL,
    "census2010pop" int   NOT NULL,
    "estimatesbase2010" int   NOT NULL,
    "popestimate2010" int   NOT NULL,
    "popestimate2011" int   NOT NULL,
    "popestimate2012" int   NOT NULL,
    "popestimate2013" int   NOT NULL,
    "popestimate2014" int   NOT NULL,
    "popestimate2015" int   NOT NULL,
    "popestimate2016" int   NOT NULL,
    "popestimate2017" int   NOT NULL,
    "popestimate2018" int   NOT NULL,
    "popestimate2019" int   NOT NULL,
    CONSTRAINT "pk_population" PRIMARY KEY (
        "p_key"
     )
);

ALTER TABLE "population" ADD CONSTRAINT "fk_population_division" FOREIGN KEY("division")
REFERENCES "division" ("d_key");

ALTER TABLE "population" ADD CONSTRAINT "fk_population_state" FOREIGN KEY("state")
REFERENCES "state" ("st_key");

ALTER TABLE "population" ADD CONSTRAINT "fk_population_sex" FOREIGN KEY("sex")
REFERENCES "sex" ("s_key");

ALTER TABLE "population" ADD CONSTRAINT "fk_population_origin" FOREIGN KEY("origin")
REFERENCES "origin" ("o_key");

ALTER TABLE "population" ADD CONSTRAINT "fk_population_race" FOREIGN KEY("race")
REFERENCES "race" ("r_key");

ALTER TABLE "population" ADD CONSTRAINT "fk_population_age" FOREIGN KEY("age")
REFERENCES "age" ("a_key");

