import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { NewsPost } from './news-post.model';
export var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.posts = [];
    }
    NewsService.prototype.getPosts = function () {
        var _this = this;
        return this.http.get('/api/news')
            .map(function (response) {
            var posts = response.json().obj;
            var transformedPosts = [];
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var post = posts_1[_i];
                if (post.thumbnail == "" || post.thumbnail == "self") {
                    post.thumbnail = 'http://i.imgur.com/OmpIPPc.png';
                }
                transformedPosts.push(new NewsPost(post.title, post.url, post.thumbnail, post.sourceUrl, post.subreddit, post.linkFlair, post.author, post.created));
            }
            _this.posts = transformedPosts;
            return transformedPosts;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    NewsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NewsService.ctorParameters = [
        { type: Http, },
    ];
    return NewsService;
}());
