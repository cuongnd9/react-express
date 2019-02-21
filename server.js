const express = require('express')

const app = express()

const port = 8000

app.get('/api/cats', (req, res) => {
  const cats = [
    { id: 1, name: 'Meow', color: 'white'},
    { id: 2, name: 'Dog', color: 'black'},
    { id: 3, name: 'Queen', color: 'blue'},
    { id: 4, name: 'King', color: 'violet'}
  ]

  res.json(cats)
})

app.listen(port, () => console.log(`server started on port ${port}`))