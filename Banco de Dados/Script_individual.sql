Create database Individual; use individual;

Create table Player (
idplayer int primary key auto_increment,
username varchar(45),
email varchar(45),
senha varchar(45),
Repsenha varchar(45)
);

Create table Campeonato (
Nome varchar (45),
Categoria varchar(45),
Dt date,
Valor decimal
);

Create table Vencedor (
idvencedor int,
fkplayer int,
fkcampeonato int,
primary key (idvencedor, fkplayer, fkcampeonato),
Status varchar(45)
);
