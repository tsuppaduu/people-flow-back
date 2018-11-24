// IMPORTS
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const app = require('express')()
const data = require('./data')

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use(compression())

// CONTROLLERS
app.get('/scanners', (req, res) => {
  res.status(200).json(data.getData())
})

app.post('/scanners/data', (req, res) => {
  try {
    // const { id, lat, lng, devices } = req.body
    data.updateLiveSensors(req.body)
    res.status(200).send('OK')
  } catch (e) {
    console.error(e)
  }
})

// CREATE SERVER
const server = http.createServer(app)
const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }`)
})
