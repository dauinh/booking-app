const express = require('express')
const app = express()
const port = 3000

// TODO: connect to database (TypeORM)
// seperate routes into a different file
// example: login/login-routes.js
app.get('/', (req, res) => {
    // sending to frontend
    // send block of data using res.json()
    res.json({id: 0, name: "linh"})
//   res.send('Hello World!')
})

// Run app forever 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})