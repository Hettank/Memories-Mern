const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A post must have title"],
        trim: true,
    },
    message: String,
    creator: String,
    tags: [String],
    selectedFiles: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
