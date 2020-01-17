
  --  create the database--

CREATE  SHARITY;


--use database to create tables

--Users table--
USE sharity;

CREATE TABLE USERS (
  userId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(50)NOT NULL,
  lastname  VARCHAR(50) NOT NULL,
  title VARCHAR(50)NOT NULL,
  email VARCHAR(50)NOT NULL,
  phone INT(20)NOT NULL,
  locationId VARCHAR(50)NOT NULL,
  vendorId VARCHAR(50)NOT NULL,
  nonProfitId VARCHAR(50)NOT NULL,

  PRIMARY KEY (userId)
);

vendor table
USE sharity;

CREATE TABLE vendor (
  userId INT NOT NULL,
  businessName VARCHAR(100)NOT NULL,
  website VARCHAR(100),
  EIN  VARCHAR(20) NOT NULL,
  email VARCHAR(50)NOT NULL,
  phone VARCHAR(20) NOT NULL,
  businessType VARCHAR(50)NOT NULL,
preferedTime VARCHAR(50) 
);


--address table--
USE sharity;

CREATE TABLE LocationAddress (
	userId INT NOT NULL,
	streetAddress VARCHAR(100) NOT NULL,
	City VARCHAR(50) NOT NULL,
	State VARCHAR(2) NOT NULL,
	ZIP  INT(10) NOT NULL,
    COUNTRY VARCHAR(50) NOT NULL
  
);

--BUyers table--
   
   USE sharity;
  
CREATE TABLE nonProfi
  userId INT NOT NULL,
  nonProfitName VARCHAR(100) NOT NUll,
  website  VARCHAR(100),
  taxNumber501C3 VARCHAR(20) not null,
  missionStatement  VARCHAR(200) NOT NULL,
  businessType VARCHAR(50)NOT NULL,
  storageTypee VARCHAR(50) NOT NULL
);


--table for inventory--
USE sharity;
   
CREATE TABLE Inventory (
  Id INT NOT NULL,
 foodItemDescription VARCHAR(100) NOT NUll,
 amount VARCHAR(100) NOT NUll,
 donationComments VARCHAR(100) NOT NUll,
 storageReqs VARCHAR(100) NOT NUll,
   pickUpDeadline  VARCHAR(20) NOT NULL
  vendorId VARCHAR(100) NOT NUll,
  isActive VARCHAR(100) NOT NUll,
  isClaimed VARCHAR(100) NOT NUll,
  claimedBy VARCHAR(100) NOT NUll,
  dollarValue INTEGER (10) NOT NULL,
  pickUpDate  VARCHAR(20) NOT NULL
 
);


