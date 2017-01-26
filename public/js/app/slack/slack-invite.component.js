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
                    styles: ["\n    .form-group{\n        margin: 25px auto;\n    }\n    form{\n    margin-bottom: 10%;\n    display: flex;\n    align-items: center; \n    }\n    .btn{\n        margin-top: 20px;\n    }\n    .ng-touched.ng-invalid.form-control{\n        border: 1px solid red;\n    }\n    .message{\n        text-align: center;\n        margin-top: 30%;\n    }\n    .unity-title{\n        margin-top: 5%;\n        font-size: 4em;\n        text-align: center;\n    }\n    p{\n        margin-top: 5%;\n        font-size: 2em;\n        text-align: center;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    SlackInviteComponent.ctorParameters = [
        { type: SlackService, },
    ];
    return SlackInviteComponent;
}());
