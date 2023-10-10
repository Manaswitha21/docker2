const express = require('express')
const app = express()
const port = 5000

app.get('/university', (req, res) => {
  res.send("in university!")
})

app.listen(port, () => {
  console.log(`graduated at UofM university on port ${port}`)
})