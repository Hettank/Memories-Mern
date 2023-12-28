const express = require("express")
const router = express.Router()
const { getPosts, createPost, updatePost, deletePost, likePost } = require("../controllers/postController")

router.route('/').get(getPosts).post(createPost)
router.route('/:id').patch(updatePost).delete(deletePost)
router.patch('/:id/likePost', likePost)

module.exports = router