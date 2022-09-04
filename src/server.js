const express = require('express');
const server = express();
const path = require('path');
const ejs = require('ejs')
const Myroutes = require('./routes/routes')
const mongoose = require('mongoose')


server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static(path.join(__dirname, '../public')))

server.use(Myroutes);

server.listen(3000, ()=>{
    console.log('Server running...')
})