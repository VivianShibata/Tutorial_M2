
//create the verifications


//Identity
    const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3000;
    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'database.db'; //use o nome que você achar melhor para o banco de dados
//identidade
    app.use(express.json());
    app.get('/Identidade', (req, res) => { //put the table name
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT ID, Nome, Cargo FROM Identidade ORDER BY ID DESC';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
   
//experiencia
    app.get('/Experiencia', (req, res) => { 
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT Nome_da_empresa, Data, ID_experiencia, Descricao_experiencia FROM Experiencia ORDER BY Nome_da_empresa DESC'; //put the things on the table
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

//realizacoes
    app.get('/Realizacoes', (req, res) => { 
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT ID_realizacoes, Realizacao, Data, Descricao_realizacoes FROM Realizacoes ORDER BY ID_realizacoes DESC'; //put the things on the table
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

//formacao
    app.get('/Formacao', (req, res) => { 
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT Curso, Data, Descricao_formacao, ID_formacao FROM Formacao ORDER BY Curso DESC'; //put the things on the table
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    //Sobre Mim
    app.get('/Sobre_Mim', (req, res) => { 
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT ID_sobre, Rua, Telefone, email, Descricao_sobre FROM Sobre_Mim ORDER BY ID_sobre DESC'; //put the things on the table
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    //Habilidades
    app.get('/Habilidades', (req, res) => { 
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT Habilidade, ID_habilidades FROM Habilidades ORDER BY Habilidade DESC'; //put the things on the table
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    //Personalidade
    app.get('/Personalidade', (req, res) => { 
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT Personalidade, ID_personalidade FROM Personalidade ORDER BY Personalidade DESC'; //put the things on the table
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

  
    app.listen(3000)