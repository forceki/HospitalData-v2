import express from 'express'
import db from './config/db.js'
import bodyparse from 'body-parser'
import cors from 'cors'


const app = express();
const PORT = process.env.PORT || 5000;

//set bodyparser 
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:false}));

//set created 

app.get('/menus',(req,res) => {
	db.query("SELECT * FROM nganu",function(err,results,fields){
		if(err) throw err;
		return res.send({err:false,data:results,messege:"ngnau list"})
	});
});

app.get('/menu/:nomor',(req,res) => {
	let nomor = req.params.nomor;
	const sql = "SELECT * FROM nganu WHERE nomor=?"
	if(!nomor) {
		return res.status(400).send({error:true,messege:"nganu"})
	}
	db.query(sql,nomor,function(err,results,fields){
		if(err) throw err;
		return res.send({error:false,data:results[0],messege:"by id"});
	});
});


app.post('/menu',(req,res) => {
	let data = req.body.user;
	const sql = "INSERT INTO nganu SET ?"
	if(!data) {
		return res.status(400).send({error:true,messege:"nganu"})
	}
	db.query(sql,{data:data},function(err,results,fields){
		if(err) throw err;
		return res.send({error:false,data:results,messege:"by id"});
	});
});


app.delete('/:nomor',(req,res) => {
	let nomor = req.body.nomor;
	console.log(nomor)
	const sql = "DELETE FROM nganu WHERE nomor=?";
	if(!nomor){
		return res.status(400).send({error:true,messenge:" "+nomor});
	}
	db.query(sql,[nomor],function(err,results,fields){
		if(err) throw err;
		return res.send({error : false,data:results,messege:"data has deleted"});
		
	});
});



app.use(cors())
//set server  express
app.listen(PORT, () => console.log(`server at running ${PORT} `));


