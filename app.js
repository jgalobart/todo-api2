/*** DOTENV ***/
require('dotenv').config()

/*** EXPRESS ***/
const express = require('express')
const app = express()
const port = process.env.PORT || 8000

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

app.listen(port, () => {
    console.log('Server listening on port '+port)
})