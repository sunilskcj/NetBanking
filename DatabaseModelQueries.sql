create database Banking

create table Account_fields(
title varchar,
First_Name varchar,
Last_Name varchar,
Middle_Name varchar,
Mobile_no varchar,
Email_Id varchar,
Aadhar_no varchar,
DOB date,
Residential_Address varchar,
Permanent_Address varchar,
Occupation_Type varchar,
Source_of_income varchar,
Gross_Annual_income money
)

Create Table NetBanking_Credentials
( 
User_Id int,
Account_no int,
User_name varchar
)
Create table Funds_Transfer
(
Beneficiary_Type varchar,
Beneficiary_Accno varchar,
Beneficiary_IFSCcode varchar,
Beneficiary_Name varchar
)
create table Transaction_History
(
Date_of_Transaction datetime,
Transferred_to varchar,
Amount_Transferred money
)
