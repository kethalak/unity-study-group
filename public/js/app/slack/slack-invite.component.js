import { Component } from '@angular/core';
import { SlackService } from './slack.service';
export var SlackInviteComponent = (function () {
    function SlackInviteComponent(slackService) {
        this.slackService = slackService;
        this.inviteSent = false;
        this.redirect = false;
    }
    SlackInviteComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.slackService.invite(f.controls.email._value)
            .subscribe(function (response) {
            _this.message = response.message;
            _this.inviteSent = true;
            if (response.redirect) {
                _this.redirect = true;
            }
        });
        //error => console.error(error)
    };
    SlackInviteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slack-invite',
                    templateUrl: './slack-invite.component.html',
                    styles: ["\n    .form-group{\n        width: 30%; margin: 25px auto;\n    }\n    .btn{\n        margin-top: 20px;\n    }\n    .ng-touched.ng-invalid.form-control{\n        border: 1px solid red;\n    }\n    .message{\n        text-align: center;\n        margin-top: 30%;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    SlackInviteComponent.ctorParameters = [
        { type: SlackService, },
    ];
    return SlackInviteComponent;
}());
