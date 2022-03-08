--create database Banking

create table AccountFields(
ReferenceID int identity(1,1) not null,
Title	varchar(5) not null,
FirstName	varchar(20) not null,
LastName	varchar(20) not null,
Mobileno	varchar(20) not null,
MiddleName	varchar(20) ,
emailID	varchar(40) not null,
AadhaarCardNumber varchar(20) not null,
DOB	date not null,
ResidentialAddressLine1	varchar(120),
ResidentialAddressLine2	varchar(120),
ResidentialLandmark	varchar(120),
ResidentialState	varchar(120) not null,
ResidentialCity	varchar(120) not null,
ResidentialPincode	varchar(120) not null,
PermanentAddressLine1	varchar(120),
PermanentAddressLine2	varchar(120),
PermanentLandmark	varchar(120),
PermanentState	varchar(120) not null,
PermanentCity	varchar(120) not null,
PermanentPincode	varchar(120) not null,
Occupationdetails	varchar(120),
OccupationType	varchar(120) ,
Sourceofincome	money ,
GrossAnnualIncome	int ,
)
Create Table NetBankingCredentials
( 	
UserID int primary key not null,
NetBankingPassword	int not null,
TransactionPassword	int not null
)
create table DebitCardCredentials
(
DebitCardNumber int primary key not null,
DebitCardExpiry date not null ,
DebitCardCVV int not null
)
create table CreditCardCredentials
(
CreditCardNumber int primary key not null,
CreditCardExpiry date not null,
CreditCardCVV int not null
)
Create table ModeOfTransaction
(	
UserID int primary key not null,
Modes	int not null,
MaturityInstruction varchar
)
create table TransactionDetails
(	
TransactionReferenceID	int not null,
AccountNumber	int not null,
Name varchar not null,
Nickname varchar,
Transactionamount	money,
TransactionDate	date,
ModeofTransaction int not null,
Remark	varchar
)
