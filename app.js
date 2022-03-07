/*** DOTENV ***/
require('dotenv').config()

/*** EXPRESS ***/
const express = require('express')
const app = express()
const port = process.env.PORT || 8000

//use cors
const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.get('/', (req,res,next) => {
    res.send('hola!')
})

app.get('/lists', (req,res,next) => {
    res.json({
        'msg':'Hello World!',
        'env':process.env.MSG || 'noexiste',
        'port':port,
    })
})

app.get('/contacts', (req,res,next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    res.json([
        {'fname':'Jordi','lname':'Galobart'},
    ])
})

app.listen(port, () => {
    console.log('Server listening on port '+port)
})