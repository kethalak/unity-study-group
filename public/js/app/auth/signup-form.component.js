import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './passwordValidators';
import { UsernameValidators } from './usernameValidators';
import { AuthService } from "./auth.service";
import { User } from './user.model';
export var SignUpFormComponent = (function () {
    function SignUpFormComponent(fb, authService) {
        this.authService = authService;
        this.form = fb.group({
            username: ['', Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace]),
                UsernameValidators.shouldBeUnique],
            email: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, PasswordValidators.complexPassword])],
            confirmPassword: ['', Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch });
    }
    SignUpFormComponent.prototype.onSubmit = function () {
        var user = new User(this.form.value.username, this.form.value.password, this.form.value.email);
        this.authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.form.reset();
    };
    SignUpFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'signup-form',
                    templateUrl: './signup-form.component.html',
                    styles: ["\n    .form-group{width: 30%; margin: 25px auto;}\n    .btn{margin-top: 20px;}\n    "]
                },] },
    ];
    /** @nocollapse */
    SignUpFormComponent.ctorParameters = [
        { type: FormBuilder, },
        { type: AuthService, },
    ];
    return SignUpFormComponent;
}());
