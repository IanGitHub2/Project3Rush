const express = require('express')
const houseApi = require('../models/house.js')
const houseRouter = express.Router()

houseRouter.get('/', (req, res) => {
    houseApi.getAllHouse()
      .then((allHouse) => {
          res.json(allHouse)
      })
})

houseRouter.get('/:houseId', (req, res) => {
    houseApi.singleHouse(req.params.houseId)
      .then((house) => {
          res.json(house)
      })
})

houseRouter.post('/', (req, res) => {
    houseApi.addHouse(req.body)
      .then((house) => {
          res.json(house)
      })
})

houseRouter.put('/:houseId', (req, res) => {
    houseApi.updateHouse(req.params.houseId, req.body)
      .then(() => {
          res.json({})
      })
})

houseRouter.delete('/:houseId', (req, res) => {
    houseApi.deleteHouse(req.params.houseId)
      .then(() => {
          res.json({})
      })
})

module.exports = {
    houseRouter
}