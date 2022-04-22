const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário inserido com sucesso<h1/>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário alterado com sucesso<h1/>')
})

app.listen(3003)

/* para iniciar um servidor http, no terminal é necessário digitar:
http-server e deixar ele rodando para que todo o processo executado apareça
na web através do localhost*/

/* para iniciar o servidor na porta 3003, é necessário digitar no terminal o
código node server.js e assim ele conseguirá trazer para o BackEnd o
que foi preenchido no formulário no caso aqui, Pedro.*/