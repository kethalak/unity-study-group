import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SlackService } from './slack.service';

@Component({
    selector:'slack-invite',
    templateUrl: './slack-invite.component.html',
    styles: [`
    form{
    margin-bottom: 10%;
    display: flex;
    align-items: center; 
    }
    .btn{
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .ng-touched.ng-invalid.form-control{
        border: 1px solid red;
    }
    .form-group{
        padding: 15px;
        border-top: 2px solid black;
        border-left: 2px solid black;
        border-right: 4px solid black;
        border-bottom: 4px solid black;
        margin-top: 15px;
        margin-bottom: 15px;
        box-shadow: 5px 5px 2.5px #888888;
        border-radius: 25px;
    }
    .message{
        text-align: center;
        margin-bottom: 50px;
    }
    .unity-title{
        margin-top: 5%;
        font-size: 3em;
        text-align: center;
    }
    p{
        margin-bottom: 5%;
        font-size: 1.5em;
        text-align: center;
    }
    h1{
        text-align: center;
        margin-bottom: 5%;
    }
    `]
})

export class SlackInviteComponent{
    message: string;
    inviteSent = false;
    constructor(private slackService: SlackService){

    }
    onSubmit(f){
        this.slackService.invite(f.controls.email._value)
            .subscribe(response => {
                this.message = response.message;
                this.inviteSent = true;
            })
            //error => console.error(error)
            
    }
}