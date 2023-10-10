const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send("I am a student!")
})

app.listen(port, () => {
  console.log(`iam, a student listening on port ${port}`)
})