import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable()

export class SlackService {
    constructor(private http: Http) {
        
    }
    invite(email) {
        //const headers = new Headers({'Content-Type': 'application/json'});
        const body = {email: email};
        return this.http.post('/api/invite', body)
            .map((response: Response) => response.json())
            //.catch((error: Response) => Observable.throw(error.json()));
    }
}