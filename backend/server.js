const express = require('express')
const app = express()
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv').config({ path: './config/config.env' })

const PORT = process.env.PORT || 5000

const mongoDB = require('./config/mongoDB')
mongoDB.connect()

// Routes
const usersRoute = require('./api/routes/usersRoute')
const menuItemsRoute = require('./api/routes/menuItemsRoute')

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the API!'
  })
})

app.use('/api/v1/users', usersRoute)
app.use('/api/v1/menuItems', menuItemsRoute)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`.yellow.bold)
})