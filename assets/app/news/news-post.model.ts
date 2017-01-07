export class NewsPost {
    title: string;
    url: string;
    thumbnail?: string;
    sourceUrl?: string;
    subreddit?: string;
    linkFlair?: string;
    author?: string;
    created?: string;

    constructor(title: string, url: string, thumbnail: string, sourceUrl?: string, subreddit?: string, linkFlair?: string, author?: string, created?: string) {
        this.title = title;
        this.url = url;
        this.thumbnail = thumbnail;
        this.sourceUrl = sourceUrl;
        this.subreddit = subreddit;
        this.linkFlair = linkFlair;
        this.author = author;
        this.created = created;
    }
}