
  --  create the database--

CREATE  SHARITY;



--create vendor table--

CREATE TABLE Vendor(
	
	#Make guid column for vendor
    ID int Not Null,
  -- Makes a string column called "businessname" which cannot contain null --
	BUSINESSNAME varchar(100) NOT NULL,

    EIN int Not Null

);


--add vendor location--

USE sharity;
CREATE TABLE  VendorLocation(

VENDORID INT NOT NULL,

STREET VARCHAR(100),

CITY VARCHAR(100),

STATE VARCHAR(2),

ZIP VARCHAR(10),

COUNTRY VARCHAR(30)

);

--I added some  dummy data--

INSERT INTO VENDOR (ID, BUSINESSNAME, URL, EIN) VALUES (1, 'LOCAL ROOTS', 'LOCALROOTS.COM', '1234567890');

SELECT * FROM VENDOR;

INSERT INTO VENDORLOCATION (VENDORID, STREETADDRESS, CITY, STATE, ZIP, COUNTRY) VALUES (1, '140 NORTH WALNUT STREET', 'WOOSTER', 'OH', '44691', 'UNITED STATES');


--put address input into one field--

USE SHARITY;
SELECT * FROM VENDOR V
INNER JOIN VENDORLOCATION VL
ON V.ID = VL.VENDORID;

USE SHARITY;
SELECT CONCAT(`STREETADDRESS`,', ', `CITY`,', ',`STATE`,' ', `ZIP`) AS ADDRESS
FROM VENDORLOCATION 