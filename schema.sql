create table users (
  id varchar(50) primary key,
  username varchar(55) unique not null,
  email varchar(55) unique not null,
  password varchar(55) not null
);