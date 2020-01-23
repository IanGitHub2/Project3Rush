const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
    company: String,
    image: String,
    Price: Number,
    Year: Number,
    description: String
})

const HouseCollection = mongoose.model('House', HouseSchema)

const getAllHouse = () => {
    return HouseCollection.find()
}

const singleHouse = (houseId) => {
    return HouseCollection.findById(houseId)
}

const addHouse = (houseId) => {
    return HouseCollection.create(houseId)
}

const updateHouse = (houseId, updateHouse) => {
    return HouseCollection.findByIdAndUpdate(houseId, updateHouse)
}

const deleteHouse = (houseId) => {
    return HouseCollection.deleteOne({_id: houseId})
}

module.exports = {
    getAllHouse,
    singleHouse,
    addHouse,
    updateHouse,
    deleteHouse
}