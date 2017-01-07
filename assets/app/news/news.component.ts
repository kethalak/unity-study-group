import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NewsPost } from './news-post.model';

@Component({
    selector: 'news-component',
    templateUrl: './news.component.html',
    styleUrls: [`./news.component.css`]
})

export class NewsComponent implements OnInit{

posts : NewsPost[] = []
    constructor(private newsService: NewsService){

    }

    ngOnInit(){
    this.newsService.getPosts()
        .subscribe(
            (posts: NewsPost[]) => {
                this.posts = posts;
            }
        )
    }
}