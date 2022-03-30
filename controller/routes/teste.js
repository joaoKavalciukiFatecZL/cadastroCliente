const express = require('express');

const app = express();

app.get("/", function(req, resposta){
    resposta.send("Home Page")
})

app.get("/contato", function(req, resposta){
    resposta.send("Página de contato do app");
});

app.get("/produto", function(req, resposta){
    resposta.send("Página de produtos")
});

app.get("/dados/:nome/:cargo", function(req, resposta){
    resposta.send("<h1>Olá " + req.params.nome + "</h1> <h2>seu cargo é: " + req.params.cargo + "</h2>")
});


//ultima linha ao utilizar express, SEMPRE!
app.listen(8082, function() {
    console.log("O server está funcionando na url http://localhost:8082");
});