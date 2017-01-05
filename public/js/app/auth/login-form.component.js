import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { User } from './user.model';
export var LoginFormComponent = (function () {
    function LoginFormComponent(fb, authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        var user = new User(this.form.value.username, this.form.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/');
        }, function (error) { return console.error(error); });
        this.form.reset();
    };
    LoginFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'login-form',
                    templateUrl: './login-form.component.html',
                    styles: ["\n    .form-group{width: 30%; margin: 25px auto;}\n    .btn{margin-top: 20px;}\n    "]
                },] },
    ];
    /** @nocollapse */
    LoginFormComponent.ctorParameters = [
        { type: FormBuilder, },
        { type: AuthService, },
        { type: Router, },
    ];
    return LoginFormComponent;
}());
