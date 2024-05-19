const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'src/pages')

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/create', (req, res) => {
    res.sendFile(`${basePath}/contato.html`)
})

app.post('/insert', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    res.sendFile(`${basePath}/contato.html`)
    console.log(`Nome: ${name} \nEmail: ${email}`)
})

app.get('/contato', (req, res) => {
    res.sendFile(`${basePath}/contato.html`)
})

app.use('/', (req, res) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(3000, () => {
    console.log("Servidor aberto")
})