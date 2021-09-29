CREATE DATABASE IF NOT EXISTS devdescomplica;
USE devdescomplica;

CREATE TABLE IF NOT EXISTS alunos (
    id INT(11) AUTO_INCREMENT,
    nome VARCHAR(255),
    cpf VARCHAR(255),
    email VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO alunos VALUE(0,'Samuel Ridan','12350914745','samuel@descomplica.com');
INSERT INTO alunos VALUE(0,'Joao emanuel','12350914745','joao@descomplica.com');

