
require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000 // si no encuentra la variable de entorno PORT lo abre en el puerto 5000

app.get('/', (req, res) => {
    res.send("<h1>Hola mundo! MODIFICADO</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>Acerca de...</h1>")
})

app.get('/env', (req, res) => {
    const t = "<h1>HOST: " + process.env.MYSQL_HOST + "</h1>"
    const t1 = "<h1>USER: " + process.env.MYSQL_USER + "</h1>"
    const t2 = "<h1>PASS: " + process.env.MYSQL_PASS + "</h1>"
    res.send(t + t1 + t2)
})

console.log(process.env.MYSQL_HOST) // para leer la variable de entorno con el dotenv

app.listen(PORT)
console.log("Server on port" , PORT)
