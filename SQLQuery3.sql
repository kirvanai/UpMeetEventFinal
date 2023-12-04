--create Database [Events];

--create Table [Events](
--id int primary key identity(1,1),
--[name] nvarchar(100),
--[date] nvarchar(40),
--[time] nvarchar(10),
--[location] nvarchar(80),
--[description] nvarchar(500))


--create Table [User](
--id int primary key identity(1,1),
--userName nvarchar(100),
--[password] nvarchar(100))



--create Table Favorites(
--id int primary key identity(1,1),
-- eventID int FOREIGN KEY REFERENCES [Events](id),
-- userId int FOREIGN KEY REFERENCES [User](id))
