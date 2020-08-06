const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get(['/', '/home'], function(req, res){
    res.render('pages/index')
})

app.get('*', function(req, res){
    res.render('pages/404')
});

app.listen(3000, function(){
    console.log("Aplicação rodando na porta 3000 ")
});