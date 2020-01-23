const express = require('express')
const shoeApi = require('../models/shoe.js')
const shoeRouter = express.Router()

shoeRouter.get('/', (req, res) => {
    shoeApi.getAllShoe()
      .then((allShoe) => {
          res.json(allShoe)
      })
})

shoeRouter.post('/', (req, res) => {
    shoeApi.addShoe(req.body)
      .then((shoe) => {
          res.json({shoe})
      })
})

shoeRouter.get('/:shoeId', (req, res) => {
    shoeApi.singleShoe(req.params.shoeId)
      .then((shoe) => {
          res.json(shoe)
      })
})

shoeRouter.put('/:shoeId', (req, res) => {
    shoeApi.updateShoe(req.params.shoeId, req.body)
      .then(() => {
          res.json({})
      })
})

shoeRouter.delete('/:shoeId', (req, res) => {
    shoeApi.deleteShoe(req.params.shoeId)
      .then(() => {
          res.json({})
      })
})

module.exports = {
    shoeRouter
}