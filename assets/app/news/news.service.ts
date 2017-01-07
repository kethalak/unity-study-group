import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { NewsPost } from './news-post.model'

@Injectable()

export class NewsService{

private posts: NewsPost[] = [];

constructor(private http: Http){

}

getPosts() {
    return this.http.get('/api/news')
        .map((response: Response) => {
            const posts = response.json().obj;
            let transformedPosts: NewsPost[] = [];
            for (let post of posts) {
                if(post.thumbnail == "" || post.thumbnail == "self"){
                    post.thumbnail = 'http://i.imgur.com/OmpIPPc.png';
                }
                transformedPosts.push(new NewsPost(
                post.title,
                post.url,
                post.thumbnail,
                post.sourceUrl,
                post.subreddit,
                post.linkFlair,
                post.author,
                post.created)
                );
            }
            this.posts = transformedPosts;
            return transformedPosts;
        })
        .catch((error: Response) => Observable.throw(error.json()));
}

}
