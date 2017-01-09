export var NewsPost = (function () {
    function NewsPost(title, url, thumbnail, sourceUrl, subreddit, linkFlair, author, created) {
        this.title = title;
        this.url = url;
        this.thumbnail = thumbnail;
        this.sourceUrl = sourceUrl;
        this.subreddit = subreddit;
        this.linkFlair = linkFlair;
        this.author = author;
        this.created = created;
    }
    return NewsPost;
}());
