var mongoose = require ('mongoose');
var RedditPost = require ('../models/redditpost');
require(`dotenv`).config();

mongoose.connect(process.env.DB_URL);

RedditPost.find()
  .sort({ "created": -1 })
  .exec(function(err,notifications) {
      console.log(notifications);
});