import { Component } from '@angular/core';
import { NewsService } from './news.service';
import * as _ from 'underscore';
export var NewsComponent = (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
        this.currentPage = 1;
        this.maxSize = 10;
        this.posts = [];
        this.pagedPosts = [];
    }
    NewsComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    NewsComponent.prototype.pageChanged = function (event) {
        var startIndex = (this.currentPage - 1) * this.maxSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.maxSize);
    };
    ;
    NewsComponent.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    NewsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.postsLoading = true;
        this.newsService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.pagedPosts = _.take(_this.posts, _this.maxSize);
        }, null, function () { _this.postsLoading = false; });
    };
    NewsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'news-component',
                    templateUrl: './news.component.html',
                    styleUrls: ["./news.component.css"]
                },] },
    ];
    /** @nocollapse */
    NewsComponent.ctorParameters = [
        { type: NewsService, },
    ];
    return NewsComponent;
}());
