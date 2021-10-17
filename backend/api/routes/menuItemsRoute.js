const Router = require('express').Router()
const { getMenuItems, createMenuItem, getMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuItemsController')

Router
  .route('/')
  .get(getMenuItems)
  .post(createMenuItem)

Router
  .route('/:id')
  .get(getMenuItem)
  .put(updateMenuItem)
  .delete(deleteMenuItem)

module.exports = Router