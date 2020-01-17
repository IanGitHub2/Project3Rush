const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  image: String,
  description: String
}) 

const PostCollection = mongoose.model('Post', PostSchema)

const getAllPost = () => {
  return PostCollection.find()
}

const singlePost = (postId) => {
  return PostCollection.findById(postId)
}

const addPost = (postId) => {
  return PostCollection.create(postId)
}

const updatePost = (postId, updatePost) => {
  return PostCollection.findByIdAndUpdate(postId, updatePost)
}

const deletePost = (postId) => {
  return PostCollection.deleteOne({id_: postId})
}

module.exports = {
  getAllPost,
  singlePost,
  addPost,
  updatePost,
  deletePost
}
