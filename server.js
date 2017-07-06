const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('index');
})

app.listen(3001, function() {
    console.log('example app listening on port 3001!')
})