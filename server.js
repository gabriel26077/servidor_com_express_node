const express = require('express');
const server = express();

server.get('/', (req, res)=>{
    res.send("<h1>Home</h1>");
})

server.get('/contato', (req, res)=>{
    res.send(
    `
    <form action="/contato" method="POST">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem"></textarea>
        <input type="submit" value="Enviar">
    </form>
    `
    )
})

server.post('/contato', (req, res)=>{
    res.send("<h1>Precisamos aprender a pegar os valores que o usuário digitou</h1>");
})

server.listen(3001,()=>{
    console.log('Servidor de pé em http://localhost:3001');
    console.log('Para desligar o servidor digite: ctrl + c');
})