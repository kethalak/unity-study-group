import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidators } from './passwordValidators';
import { UsernameValidators } from './usernameValidators';

import { AuthService } from "./auth.service";
import { User } from './user.model';

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styles: [`
    .form-group{width: 30%; margin: 25px auto;}
    .btn{margin-top: 20px;}
    `]
})
export class SignUpFormComponent {
    form : FormGroup;

    constructor(fb: FormBuilder, private authService: AuthService, private router: Router){
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace]),
                UsernameValidators.shouldBeUnique],
            email: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, PasswordValidators.complexPassword])],
            confirmPassword: ['', Validators.required]
        }, {validator: PasswordValidators.passwordsShouldMatch});
    }
    onSubmit() {
        const user = new User(
            this.form.value.username,
            this.form.value.password,
            this.form.value.email
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.form.reset();
        this.router.navigateByUrl('/');
    }
}