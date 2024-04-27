/*  */

require('dotenv').config()
const express = require('express')
const cors = require('cors')

/*  */

const db = require('./config/dbConnect.js')
const skillRouter = require('./routes/skillsRoutes.js')
const certificatesRouter = require('./routes/certificatesRoutes.js')
const aboutMeRouter = require('./routes/aboutMeRoutes.js')
const projectsRouter = require('./routes/projectsRoutes.js')
const passwordRoute = require('./routes/passwordRoute.js')

/*  */

const port = process.env.PORT || 5555
const app = express()

/*  */

app.listen(port, () => {
    console.log(`Server ligado -> http://localhost:${port}`)
})

app.use(
    cors(),
    express.json(),
    skillRouter,
    certificatesRouter,
    aboutMeRouter,
    projectsRouter,
    passwordRoute
)

/*  */

db.once('open', () => {
    console.log('MongoDB conectado')
})

db.on('error', () => {
    console.log('Erro ao conectar com MongoDB')
})

/*  */

app.get('/', (req,res) => {
    res.send('Bem vindo ao meu portfólio')
})