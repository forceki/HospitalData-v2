import mysql from 'mysql'

const db = mysql.createConnection({
	host : "localhost",
	user : "forceki",
	password : "forcek1desu",
	database : "borma",
	multipleStatements:true
});


db.connect((err) => {
	if(err) throw err;
	console.log('mysql connect');
});

export default db;
