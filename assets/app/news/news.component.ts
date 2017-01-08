import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NewsPost } from './news-post.model';
import * as _ from 'underscore';

@Component({
    selector: 'news-component',
    templateUrl: './news.component.html',
    styleUrls: [`./news.component.css`]
})

export class NewsComponent implements OnInit{
    public currentPage:number = 1;
    public maxSize:number = 10; 
    posts : NewsPost[] = [];
    pagedPosts : NewsPost[] = [];
    postsLoading;

    constructor(private newsService: NewsService){

    }

    public setPage(pageNo:number):void {
        this.currentPage = pageNo;    
    };
    
    public pageChanged(event:any):void {
        var startIndex = (this.currentPage - 1) * this.maxSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.maxSize);
  };
  
    ngOnInit(){
        this.loadPosts();
    }

    private loadPosts(filter?){
        this.postsLoading = true;
        this.newsService.getPosts()
            .subscribe(
                posts => {
                this.posts = posts;
                this.pagedPosts = _.take(this.posts, this.maxSize);},
                           null, 
                () => {this.postsLoading = false});
    }
}