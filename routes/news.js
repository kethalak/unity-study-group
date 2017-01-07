var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var RedditPost = require('../models/redditpost');

router.get('/', function (req, res, next) {
     RedditPost.find({}, function(err, allPosts){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: allPosts
        });
     });
});

module.exports = router;