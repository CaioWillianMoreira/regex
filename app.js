const express = require('express')
const app = express()
const port = 3003

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get(['/', '/home'], function(req, res){
  res.render('pages/index')
});

app.get(['/enviado'], function(req, res){
  res.render('pages/enviado')
});

app.get('*', function(req, res){
  res.render('pages/404')
});

app.listen(port, function(){
  console.log(`Aplicação rodando na porta ${ port }`)
});
