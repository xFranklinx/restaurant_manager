const MenuItem = require('../models/menuItemModel')

exports.getMenuItems = ('/', async (req, res) => {
  try {
    const results = await MenuItem.find()

    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred when processing your request',
      error: err
    })
  }
})

exports.createMenuItem = ('/', async (req, res) => {
  try {
    await MenuItem.create(req.body, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'An error occurred when creating a new menu item',
          error: err
        })
      }


      res.status(201).json({
        success: true,
        data: result
      })
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred when processing your request',
      error: err
    })
  }
})


exports.getMenuItem = ('/:id', async (req, res) => {
  try {
    const result = await MenuItem.findById(req.params.id)

    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Unable to find a menu item with the ID provided'
      })
    }

    res.status(200).json({
      success: true,
      data: result
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred when processing your request',
      error: err
    })
  }
})


exports.updateMenuItem = ('/:id', async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!updatedItem) {
      return res.status(400).json({
        success: false,
        message: 'Unable to update the menu item with the ID provided'
      })
    }

    res.status(201).json({
      success: true,
      data: updatedItem
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred when processing your request',
      error: err
    })
  }
})


exports.deleteMenuItem = ('/:id', async (req, res) => {
  try {
    const result = await MenuItem.findByIdAndDelete(req.params.id)

    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Unable to delete the menu item with the ID provided'
      })
    }

    res.status(200).json({
      success: true,
      data: result
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred when processing your request',
      error: err
    })
  }
})