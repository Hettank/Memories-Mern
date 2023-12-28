const Post = require("../models/postModel.js")

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post)
    } catch (error) {
        res.status(409).json({ msg: error })
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete(req.params.id)
        res.status(204).json({ post })
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

const likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { likeCount: post.likeCount + 1 }, { new: true })
        res.status(204).json({ updatedPost })
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

module.exports = { getPosts, createPost, updatePost, deletePost, likePost }