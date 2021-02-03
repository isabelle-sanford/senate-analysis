-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "age" (
    "a_key" varchar(5)   NOT NULL,
    "age_range" varchar(25)   NOT NULL,
    "generation" varchar(25)   NOT NULL,
    CONSTRAINT "pk_age" PRIMARY KEY (
        "a_key"
     )
);

CREATE TABLE "division" (
    "d_key" varchar(5)   NOT NULL,
    "division" varchar(50)   NOT NULL,
    CONSTRAINT "pk_division" PRIMARY KEY (
        "d_key"
     )
);

CREATE TABLE "origin" (
    "o_key" varchar(5)   NOT NULL,
    "origin" varchar(50)   NOT NULL,
    CONSTRAINT "pk_origin" PRIMARY KEY (
        "o_key"
     )
);

CREATE TABLE "race" (
    "r_key" varchar(5)   NOT NULL,
    "race" varchar(50)   NOT NULL,
    "race2" varchar(100)   NOT NULL,
    CONSTRAINT "pk_race" PRIMARY KEY (
        "r_key"
     )
);

CREATE TABLE "sex" (
    "s_key" varchar(5)   NOT NULL,
    "sex" varchar(25)   NOT NULL,
    CONSTRAINT "pk_sex" PRIMARY KEY (
        "s_key"
     )
);

CREATE TABLE "state" (
    "st_key" varchar(5)   NOT NULL,
    "st" varchar(5)   NOT NULL,
    "state" varchar(50)   NOT NULL,
    CONSTRAINT "pk_state" PRIMARY KEY (
        "st_key"
     )
);

CREATE TABLE "senate" (
    "key" int   NOT NULL,
    "st" varchar(10)   NOT NULL,
    "state" varchar(50)   NOT NULL,
    "senator" varchar(100)   NOT NULL,
    "party" varchar(100)   NOT NULL,
    "born" varchar(50)   NOT NULL,
    "assumed_office" date   NOT NULL,
    "term_up" date   NOT NULL
);

CREATE TABLE "population" (
    "key" int   NOT NULL,
    "sumlev" int   NOT NULL,
    "region" varchar(10)   NOT NULL,
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
        "key"
     )
);

CREATE TABLE "religious" (
    "key" int   NOT NULL,
    "st" varchar(10)   NOT NULL,
    "state" int   NOT NULL,
    "baptist_family_(et)" int   NOT NULL,
    "methodist_family_(et)" int   NOT NULL,
    "non_denominational_family_(et)" int   NOT NULL,
    "lutheran_family_(et)" int   NOT NULL,
    "presbyterian_(et)" int   NOT NULL,
    "pentecostal_family_(et)" int   NOT NULL,
    "episcopalian/anglican_family_(et)" int   NOT NULL,
    "restorationist_family_(et)" int   NOT NULL,
    "congregationalist_family_(et)" int   NOT NULL,
    "holiness_family_(et)" int   NOT NULL,
    "reformed_family_(et)" int   NOT NULL,
    "adventist_family_(et)" int   NOT NULL,
    "anabaptist_family_(et)" int   NOT NULL,
    "pietist_family_(et)" int   NOT NULL,
    "other_evangelical" int   NOT NULL,
    "nonspecific_protestant_family_(et)" int   NOT NULL,
    "baptist_family_(mt)" int   NOT NULL,
    "methodist_family_(mt)" int   NOT NULL,
    "non-denominational_family_(mt)" int   NOT NULL,
    "lutheran_family_(mt)" int   NOT NULL,
    "presbyterian_family_(mt)" int   NOT NULL,
    "episcopalian/anglican_family_(mt)" int   NOT NULL,
    "restorationist_family_(mt)" int   NOT NULL,
    "congregationalist_family_(mt)" int   NOT NULL,
    "reformed_family_(mt)" int   NOT NULL,
    "anabaptist_family_(mt)" int   NOT NULL,
    "friends_family_(mt)" int   NOT NULL,
    "nonspecific_protestant_family_(mt)" int   NOT NULL,
    "baptist_family_(hbpt)" int   NOT NULL,
    "methodist_family_(hbpt)" int   NOT NULL,
    "pentecostal_family_(hbpt)" int   NOT NULL,
    "holiness_family_(hbpt)" int   NOT NULL,
    "non-denominational_family_(hbpt)" int   NOT NULL,
    "nonspecific_protestant_(hbpt)" int   NOT NULL,
    "catholic" int   NOT NULL,
    "mormon-lds" int   NOT NULL,
    "other_mormom" int   NOT NULL,
    "greek_orthodox" int   NOT NULL,
    "russian_orthodox" int   NOT NULL,
    "orthodox_church_in_america" int   NOT NULL,
    "other_orthodox_christian" int   NOT NULL,
    "jehovah's_witness" int   NOT NULL,
    "other_christian" int   NOT NULL,
    "jewish" int   NOT NULL,
    "muslim" int   NOT NULL,
    "buddhist" int   NOT NULL,
    "hindu" int   NOT NULL,
    "other_world_religions" int   NOT NULL,
    "unitarians" int   NOT NULL,
    "new_age" int   NOT NULL,
    "native_american_religions" int   NOT NULL,
    "atheist" int   NOT NULL,
    "agnostic" int   NOT NULL,
    "nothing_in_particular" int   NOT NULL,
    CONSTRAINT "pk_religious" PRIMARY KEY (
        "key"
     )
);

ALTER TABLE "senate" ADD CONSTRAINT "fk_senate_st" FOREIGN KEY("st")
REFERENCES "state" ("st_key");

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

ALTER TABLE "religious" ADD CONSTRAINT "fk_religious_st" FOREIGN KEY("st")
REFERENCES "state" ("st_key");

