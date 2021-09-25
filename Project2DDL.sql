--DDL for P2Group2SocialGame
--Still need to add the on delete cascades and set nulls

CREATE DATABASE P2_NotFightClub
Go

USE P2_NotFightClub
Go

CREATE TABLE UserInfo(
UserId uniqueidentifier not null default newId() primary key,
UserName nvarchar(50) not null,
PWord nvarchar(100) not null,
Email nvarchar(50),
DOB date,
Bucks int default 20 check (Bucks>=20)
)

CREATE TABLE Trait(
TraitId int not null identity(1,1) primary key,
[Description] nvarchar(300)
)

CREATE TABLE Weapon(
WeaponId int not null identity(1,1) primary key,
[Description] nvarchar(300)
)

CREATE TABLE [Character](
CharacterId int not null identity (1,1) Primary Key,
[Name] nvarchar(100) not null,
[Level] int,
Wins int,
Losses int,
Ties int,
Baseform nvarchar(100),
UserId uniqueidentifier not null FOREIGN KEY REFERENCES UserInfo(UserId),
TraitId int not null FOREIGN KEY REFERENCES Trait(TraitId) on delete no action ,
WeaponId int not null FOREIGN KEY REFERENCES Weapon(WeaponId) on delete no action
)

CREATE TABLE [Location](
LocationId int not null identity(1,1) primary key,
[Location] nvarchar(100) not null
)

CREATE TABLE Weather(
WeatherId int not null identity(1,1) primary key,
[Description] nvarchar(100) not null
)

CREATE TABLE Fight(
FightId int not null identity (1,1) primary key,
Winner int  FOREIGN KEY REFERENCES [Character](CharacterId) on delete no action,
Loser int  FOREIGN KEY REFERENCES [Character](CharacterId) on delete no action,
[Date] date default getdate(),
Result nvarchar(300),
[Location] int foreign key references [Location](LocationId),
Weather int foreign key references Weather(WeatherId)
)

CREATE TABLE Fighter(
FighterId int not null identity(1,1) primary key,
FightId int  FOREIGN KEY REFERENCES Fight(FightId) on delete no action ,
CharacterId int  FOREIGN KEY REFERENCES [Character](CharacterId) on delete no action,
Votes int
)

CREATE TABLE Comment(
CommentId int not null identity(1,1) primary key,
FightId int FOREIGN KEY REFERENCES Fight(FightId) on delete cascade,
UserId  uniqueidentifier FOREIGN KEY REFERENCES UserInfo(UserId) on delete no action,
[Date] date default GetDate(),
Comment nvarchar(1000),
Parentcomment int Foreign key references Comment(CommentId)
)

CREATE TABLE Wager(
WagerId int not null identity(1,1) primary key,
UserId uniqueidentifier FOREIGN KEY REFERENCES UserInfo(UserId) on delete no action,
FightId int FOREIGN KEY REFERENCES Fight(FightId) on delete cascade,
Amount int, 
FighterId  int FOREIGN KEY REFERENCES Fighter(FighterId) 
)

