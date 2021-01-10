const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')

require('dotenv').config({path: './config/.env'})
require('./config/db')
const {checkUser, requireAuth} = require('./middleware/auth.middleware')
const cors = require('cors')
const app = express()

/*const corsOption = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors({corsOption}))*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")

    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

//jwt
app.get('*', checkUser)
app.get('/jwtid', requireAuth, (req,res) => {
    res.status(200).send(res.locals.user._id)
})

//routes
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)


// server
app.listen(process.env.PORT||3000, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})