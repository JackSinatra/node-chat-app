const path = require('path')
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express();
var server = http.createServer(app)
var io = socketIO(server)
const publicPath = path.join(__dirname,'../public')

app.use(express.static(publicPath))
app.set('view engine', 'ejs')
app.set('views', publicPath);
// Render
app.get('/',(req,res)=>{
  res.render('index')
})
app.get('/about',(req,res)=>{
  res.render('about')
})


io.on('connection',(socket)=>{
  console.log('New user connected')
})

io.on('disconnect',(socket)=>{
  console.log('New user connected')
})













// Setup port for local/heroku app
const port = process.env.PORT || 3000
// Listen to provided port
server.listen(port, ()=> {
  console.log(`Server is running on port ${port}`)
})
