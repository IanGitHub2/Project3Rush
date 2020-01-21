const express = require('express')
const postApi = require('../models/post.js')
const postRouter = express.Router()


postRouter.get('/', (req, res) => {
  postApi.getAllPost()
    .then((allPost) => {
      res.json(allPost)
    })
})
postRouter.post('/', (req, res) => {
  postApi.addPost(req.body)
    .then((post) => {
      res.json({post})
    })
})

postRouter.get('/:postId', (req, res) => {
  postApi.singlePost(req.params.postId)
    .then((post) => {
      res.json(post)
    })
})


postRouter.put('/:postId', (req, res) => {
  postApi.updatePost(req.params.postId, req.body)
    .then(() => {
      res.json({})
    })
})

postRouter.delete('/:postId', (req, res) => {
  postApi.deletePost(req.params.postId)
    .then(() => {
      res.json({})
    })
})

module.exports = {
 postRouter
}
