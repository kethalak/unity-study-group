import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SlackService } from './slack.service';

@Component({
    selector:'slack-invite',
    templateUrl: './slack-invite.component.html',
    styles: [`
    .form-group{
        margin: 25px auto;
    }
    form{
    margin-bottom: 10%;
    display: flex;
    align-items: center; 
    }
    .btn{
        margin-top: 20px;
    }
    .ng-touched.ng-invalid.form-control{
        border: 1px solid red;
    }
    .message{
        text-align: center;
        margin-top: 30%;
    }
    .unity-title{
        margin-top: 5%;
        font-size: 4em;
        text-align: center;
    }
    p{
        margin-top: 5%;
        font-size: 2em;
        text-align: center;
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