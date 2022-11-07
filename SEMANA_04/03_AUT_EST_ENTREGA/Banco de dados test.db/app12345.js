
//create the verifications


//Identity
    const express = require('express'); 
    const app = express();
    const bodyParser = require('body-parser');
    const urlencodedParser = bodyParser.urlencoded({ extended: false })

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

    /* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/Identidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Identidade ORDER BY Nome COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insere/Identidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Identidade (Nome, Cargo) VALUES ('" + req.body.nome + "', '" + req.body.email + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualiza/Identidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM Identidade WHERE ID="+ req.query.userId;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualiza/Identidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Identidade SET Nome='" + req.body.nome + "', Cargo = '" + req.body.email + "' WHERE userId='" + req.body.userId + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/remove/Identidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Identidade WHERE ID='" + req.query.userId + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
  
    app.listen(3000)