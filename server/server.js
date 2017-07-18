const path = require('path')
const express = require('express')
const app = express();
const publicPath = path.join(__dirname,'../public')

app.use(express.static(publicPath))


// Setup port for local/heroku app
const port = process.env.PORT || 3000



// Listen to provided port
app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`)
})
