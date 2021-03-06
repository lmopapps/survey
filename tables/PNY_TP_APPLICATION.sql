  CREATE TABLE PNY_TP_APPLICATION
(
	ROW_ITEM_ID	NUMBER NOT NULL,
UPLOAD_ID	NUMBER NOT NULL,
RAW_DATA	CHARACTER VARYING(3000),
ID_NO	CHARACTER VARYING(3),
NAME1	CHARACTER VARYING(50),
ADDRESS1	CHARACTER VARYING(100),
RT1	CHARACTER VARYING(3),
RW1	CHARACTER VARYING(3),
CITY1	CHARACTER VARYING(50),
POSTAL_CODE1	CHARACTER VARYING(5),
PHONE_CODE1	CHARACTER VARYING(4),
PHONE_NO1	CHARACTER VARYING(10),
SIL_STATUS1	CHARACTER VARYING(1),
URG_STATUS1	CHARACTER VARYING(1),
ULG_STATUS1	CHARACTER VARYING(1),
NAME2	CHARACTER VARYING(50),
ADDRESS2	CHARACTER VARYING(100),
RT2	CHARACTER VARYING(3),
RW2	CHARACTER VARYING(3),
CITY2	CHARACTER VARYING(50),
OWNER_NAME	CHARACTER VARYING(50),
BUSINESS_TYPE	CHARACTER VARYING(50),
POSTAL_CODE2	CHARACTER VARYING(5),
PHONE_CODE3	CHARACTER VARYING(4),
PHONE_NO2	CHARACTER VARYING(10),
SIL_STATUS2	CHARACTER VARYING(1),
URG_STATUS2	CHARACTER VARYING(1),
ULG_STATUS2	CHARACTER VARYING(1),
CREATED_BY CHARACTER VARYING(50) DEFAULT 'SYSTEM'::CHARACTER VARYING,
CREATED_ON TIMESTAMP WITHOUT TIME ZONE DEFAULT SYSDATE,
CONSTRAINT PNY_TP_APPLICATION_PKEY PRIMARY KEY (ROW_ITEM_ID,UPLOAD_ID)
  
  
)
WITH (
  OIDS=FALSE
);
ALTER TABLE PNY_TP_APPLICATION
  OWNER TO apps_system;


CREATE SEQUENCE PNY_TP_APPLICATION_SEQ
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 999999999999999999
  START 1
  CACHE 20;
ALTER TABLE PNY_TP_APPLICATION_SEQ
  OWNER TO apps_system;
  
 
  

