const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const ShoeSchema = new Schema({
    brand: String,
    image: String,
    name: String,
    size: Number,
    release: Date,
    description: String
})

const ShoeCollection = mongoose.model('Shoe', ShoeSchema)

const getAllSHoe = () => {
    return ShoeCollection.find()
}

const singleShoe = (shoeId) => {
    return ShoeCollection.findById(shoeId)
}

const addShoe = (shoeId) => {
    return ShoeCollection.create(shoeId)
}

const updateShoe = (shoeId, updateShoe) => {
    return ShoeCollection.findByIdAndUpdate(shoeId, updateShoe)
}

const deleteShoe = (shoeId) => {
    return ShoeCollection.deleteOne({_id: shoeId})
}

module.exports = {
    getAllSHoe,
    singleShoe,
    addShoe,
    updateShoe,
    deleteShoe
}