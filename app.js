const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/port', (req, res) => {
    res.send(process.env.PORT)
  })

app.post('/', (req, res) => {
    res.send('Bye World!')
  })

app.post('/lists/list', (req, res) => {
res.send('List!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})