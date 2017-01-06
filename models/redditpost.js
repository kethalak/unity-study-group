var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RedditPostSchema = new Schema({
    title: String,
    url: String,
    sourceUrl: String,
    thumbnail: String,
    subreddit: String,
    linkFlair: String,
    author: String,
    created: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model("RedditPost", RedditPostSchema);