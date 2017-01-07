var request = require('request-promise');
var RedditPost = require ('../models/redditpost');
var mongoose = require('mongoose');
require(`dotenv`).config();
var bluebird = require ('bluebird');

mongoose.connect(process.env.DB_URL);

var posts = [];

var request1 = request({url:'http://www.reddit.com/r/unity3d/top.json', qs:{limit: 5, t:"day"}});
var request2 = request({url:'http://www.reddit.com/r/gamedev/top.json', qs:{limit: 4, t:"day"}});
var request3 = request({url:'http://www.reddit.com/r/virtualreality/top.json', qs:{limit: 3, t:"day"}});
var request4 = request({url:'http://www.reddit.com/r/gamedesign/top.json', qs:{limit: 2, t:"day"}});
var request5 = request({url:'http://www.reddit.com/r/unity_tutorials/top.json', qs:{limit: 2, t:"day"}});

bluebird.all([request1, request2, request3, request4, request5])
    .spread(function (rOR1, rOR2, rOR3, rOR4, rOR5) {
        var parsedPosts = JSON.parse(rOR1).data.children;
        addPosts(parsedPosts);
        var parsedPosts = JSON.parse(rOR2).data.children;
        addPosts(parsedPosts);
        var parsedPosts = JSON.parse(rOR3).data.children;
        addPosts(parsedPosts);
        var parsedPosts = JSON.parse(rOR4).data.children;
        addPosts(parsedPosts);
        var parsedPosts = JSON.parse(rOR5).data.children;
        addPosts(parsedPosts);
        shuffle(posts);
        savePosts();
    })
    .catch(function (err) {
        // At least one request failed.
        // Do your error handling here.
        console.log(err);
    });

function addPosts(parsedPosts){
    for(var i = 0; i < parsedPosts.length; i++){
        var post = new RedditPost({
            title: parsedPosts[i].data.title,
            url: parsedPosts[i].data.url,
            thumbnail: parsedPosts[i].data.thumbnail,
            sourceUrl: parsedPosts[i].data.permalink,
            subreddit: parsedPosts[i].data.subreddit,
            linkFlair: parsedPosts[i].data.link_flair_text,
            author: parsedPosts[i].data.author,
            created: parsedPosts[i].data.created_utc
        });
        posts.push(post);
    };
}

function savePosts(){
    for(var i = 0; i < posts.length; i++){
        posts[i].save(function(err){
            if(err){
                console.log(err);
            }
        })
    }
    console.log("Added " + posts.length + " posts to the DB");
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}