  CREATE TABLE PNY_MD_ZONA_AREA
(
	ZONA_AREA_ID	NUMBER NOT NULL,
	BRANCH_ID	NUMBER NOT NULL,
	ZONA	CHARACTER VARYING(2),
	KECAMATAN	CHARACTER VARYING(50),
	KELURAHAN	CHARACTER VARYING(50),
	POSTAL_CODE	CHARACTER VARYING(5),
	AREA	CHARACTER VARYING(2),
	RECORD_STATUS	CHARACTER VARYING(1),
	CREATED_BY CHARACTER VARYING(50) DEFAULT 'SYSTEM'::CHARACTER VARYING,
	CREATED_ON TIMESTAMP WITHOUT TIME ZONE DEFAULT SYSDATE,
	MODIFIED_BY	CHARACTER VARYING(50) DEFAULT 'SYSTEM'::CHARACTER VARYING,
	MODIFIED_ON	TIMESTAMP WITHOUT TIME ZONE DEFAULT SYSDATE,
  CONSTRAINT PNY_MD_ZONA_AREA_PKEY PRIMARY KEY (ZONA_AREA_ID)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE PNY_MD_ZONA_AREA
  OWNER TO apps_system;


CREATE SEQUENCE PNY_MD_ZONA_AREA_SEQ
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 999999999999999999
  START 1
  CACHE 20;
ALTER TABLE PNY_MD_ZONA_AREA_SEQ
  OWNER TO apps_system;
  

