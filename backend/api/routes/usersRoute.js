const Router = require('express').Router()
const { getUsers } = require('../controllers/usersController')

Router
  .route('/')
  .get(getUsers)

module.exports = Router