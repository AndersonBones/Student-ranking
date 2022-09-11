const express = require('express');
const server = express();
const path = require('path');
const Myroutes = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
// set mongodb
mongoose.connect(process.env.MONGO_URL)
let db = mongoose.connection;

db.on("error",()=>{
    console.log('Houve um erro')
})
db.once('open',()=>{ 
    console.log('Banco carregado')
})

// set cors
server.use(cors());

// set ejs view engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// set statics pages
server.use(express.static(path.join(__dirname, '../public')))

// set routes
server.use(Myroutes);
server.use((req, res)=>{
    res.render('pages/404')
})

// listen port
server.listen(3000, ()=>{
    console.log('Server running...')
})