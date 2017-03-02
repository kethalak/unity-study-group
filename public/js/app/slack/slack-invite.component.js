import { Component } from '@angular/core';
import { SlackService } from './slack.service';
export var SlackInviteComponent = (function () {
    function SlackInviteComponent(slackService) {
        this.slackService = slackService;
        this.inviteSent = false;
    }
    SlackInviteComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.slackService.invite(f.controls.email._value)
            .subscribe(function (response) {
            _this.message = response.message;
            _this.inviteSent = true;
        });
        //error => console.error(error)
    };
    SlackInviteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slack-invite',
                    templateUrl: './slack-invite.component.html',
                    styles: ["\n    form{\n    margin-bottom: 10%;\n    display: flex;\n    align-items: center; \n    }\n    .btn{\n        margin-top: 5%;\n        margin-bottom: 5%;\n    }\n    .ng-touched.ng-invalid.form-control{\n        border: 1px solid red;\n    }\n    .form-group{\n        padding: 15px;\n        border-left: 3px solid black;\n        border-right: 3px solid black;\n        border-bottom: 5px solid black;\n        margin-top: 15px;\n        margin-bottom: 15px;\n        border-radius: 25px;\n    }\n    .message{\n        text-align: center;\n        margin-bottom: 50px;\n    }\n    .unity-title{\n        margin-top: 5%;\n        font-size: 3em;\n        text-align: center;\n    }\n    p{\n        margin-bottom: 5%;\n        font-size: 1.5em;\n        text-align: center;\n    }\n    h1{\n        text-align: center;\n        margin-bottom: 5%;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    SlackInviteComponent.ctorParameters = [
        { type: SlackService, },
    ];
    return SlackInviteComponent;
}());
