const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: null },
  category: { type: String, required: true, enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink'] },
  price: { type: Number, default: null }
})

const menuItemModel = mongoose.model('menu item', menuItemSchema, 'menu items')

module.exports = menuItemModel