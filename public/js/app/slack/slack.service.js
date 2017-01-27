import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';
export var SlackService = (function () {
    function SlackService(http) {
        this.http = http;
    }
    SlackService.prototype.invite = function (email) {
        //const headers = new Headers({'Content-Type': 'application/json'});
        var body = { email: email };
        return this.http.post('/api/invite', body)
            .map(function (response) { return response.json(); });
        //.catch((error: Response) => Observable.throw(error.json()));
    };
    SlackService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SlackService.ctorParameters = [
        { type: Http, },
    ];
    return SlackService;
}());
