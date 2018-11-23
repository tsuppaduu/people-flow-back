// IMPORTS
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const app = require('express')()

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use(compression())

// CONTROLLERS
app.get('/', (req, res) => {
  res.status(200).json({ data: [1, 2, 3] })
})

// CREATE SERVER
const server = http.createServer(app)
const PORT = process.env.port || 8080
server.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }`)
})
