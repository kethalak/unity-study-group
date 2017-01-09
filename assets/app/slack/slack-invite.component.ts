import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SlackService } from './slack.service';

@Component({
    selector:'slack-invite',
    templateUrl: './slack-invite.component.html',
    styles: [`
    .form-group{
        width: 30%; margin: 25px auto;
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
    `]
})

export class SlackInviteComponent{
    message: string;
    inviteSent = false;
    redirect = false;
    constructor(private slackService: SlackService){

    }
    onSubmit(f){
        this.slackService.invite(f.controls.email._value)
            .subscribe(response => {
                this.message = response.message;
                this.inviteSent = true;
                if(response.redirect){
                    this.redirect = true;
                }
            })
            //error => console.error(error)
            
    }
}