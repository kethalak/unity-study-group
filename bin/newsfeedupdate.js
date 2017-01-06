var request = require('request');
var RedditPost = require ('../models/redditpost');
var mongoose = require('mongoose');
require(`dotenv`).config();

mongoose.connect(process.env.DB_URL);

var posts = [];
GetPosts('unity3d', 5);

function GetPosts(sub, lim){
    request({url:'http://www.reddit.com/r/' + sub + '/top.json', qs:{limit: lim, t:"year"}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedPosts = JSON.parse(body).data.children;

            for(var i = 0; i < parsedPosts.length; i++){
                var post = new RedditPost({
                    title: parsedPosts[i].data.title,
                    url: parsedPosts[i].data.url,
                    sourceUrl: parsedPosts[i].data.permalink,
                    thumbnail: parsedPosts[i].data.thumbnail,
                    subreddit: parsedPosts[i].data.subreddit,
                    linkFlair: parsedPosts[i].data.link_flair_text,
                    author: parsedPosts[i].data.author,
                    created: parsedPosts[i].data.created_utc
                });
                posts.push(post);
                console.log(posts.length);
                // post.save(function(err){
                //     if(err){
                //         console.log(err);
                //     }
                // });
            };
            console.log(posts.length);
        };
    });
}


//     request({url:'http://www.reddit.com/r/gamedev/top.json', qs:{limit: 20, t:"year"}}, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var parsedData = JSON.parse(body);
//         var parsedPosts = parsedData.data.parsedPosts;

//         for(var i = 0; i < parsedPosts.length; i++){
//             var post = new RedditPost({
//                 title: parsedPosts[i].data.title,
//                 url: parsedPosts[i].data.url,
//                 sourceUrl: parsedPosts[i].data.permalink,
//                 thumbnail: parsedPosts[i].data.thumbnail,
//                 subreddit: parsedPosts[i].data.subreddit,
//                 linkFlair: parsedPosts[i].data.link_flair_text,
//                 author: parsedPosts[i].data.author,
//                 created: parsedPosts[i].data.created_utc
//             });
//             post.save(function(err){
//                 if(err){
//                     console.log(err);
//                 }
//             })
//         };
//     };
//     });

//     request({url:'http://www.reddit.com/r/virtualreality/top.json', qs:{limit: 15, t:"year"}}, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var parsedData = JSON.parse(body);
//         var parsedPosts = parsedData.data.parsedPosts;

//         for(var i = 0; i < parsedPosts.length; i++){
//             var post = new RedditPost({
//                 title: parsedPosts[i].data.title,
//                 url: parsedPosts[i].data.url,
//                 sourceUrl: parsedPosts[i].data.permalink,
//                 thumbnail: parsedPosts[i].data.thumbnail,
//                 subreddit: parsedPosts[i].data.subreddit,
//                 linkFlair: parsedPosts[i].data.link_flair_text,
//                 author: parsedPosts[i].data.author,
//                 created: parsedPosts[i].data.created_utc
//             });
//             post.save(function(err){
//                 if(err){
//                     console.log(err);
//                 }
//             })
//         };
//     };
//     });

//     request({url:'http://www.reddit.com/r/gamedesign/top.json', qs:{limit: 10, t:"year"}}, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var parsedData = JSON.parse(body);
//         var parsedPosts = parsedData.data.parsedPosts;

//         for(var i = 0; i < parsedPosts.length; i++){
//             var post = new RedditPost({
//                 title: parsedPosts[i].data.title,
//                 url: parsedPosts[i].data.url,
//                 sourceUrl: parsedPosts[i].data.permalink,
//                 thumbnail: parsedPosts[i].data.thumbnail,
//                 subreddit: parsedPosts[i].data.subreddit,
//                 linkFlair: parsedPosts[i].data.link_flair_text,
//                 author: parsedPosts[i].data.author,
//                 created: parsedPosts[i].data.created_utc
//             });
//             post.save(function(err){
//                 if(err){
//                     console.log(err);
//                 }
//             })
//         };
//     };
//     });

//     request({url:'http://www.reddit.com/r/unity_tutorials/top.json', qs:{limit: 10, t:"year"}}, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var parsedData = JSON.parse(body);
//         var parsedPosts = parsedData.data.parsedPosts;

//         for(var i = 0; i < parsedPosts.length; i++){
//             var post = new RedditPost({
//                 title: parsedPosts[i].data.title,
//                 url: parsedPosts[i].data.url,
//                 sourceUrl: parsedPosts[i].data.permalink,
//                 thumbnail: parsedPosts[i].data.thumbnail,
//                 subreddit: parsedPosts[i].data.subreddit,
//                 linkFlair: parsedPosts[i].data.link_flair_text,
//                 author: parsedPosts[i].data.author,
//                 created: parsedPosts[i].data.created_utc
//             });
//             post.save(function(err){
//                 if(err){
//                     console.log(err);
//                 }
//             })
//         };
//     };
// });


// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
// }


// getPosts(function(posts){
//     posts = shuffle(posts, function(posts){
//         posts.forEach(function(post){
//             post.save(function(err){
//                 if(err){
//                     console.log(err);
//                 };
//             });
//         });

//     })
// })


