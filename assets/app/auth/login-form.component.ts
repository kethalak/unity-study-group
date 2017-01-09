import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { User } from './user.model';


@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styles: [`
    .form-group{
        width: 30%; 
        margin: 20px auto;
    }
    .btn{
        margin-top: 20px;
    }
    .ng-touched.ng-invalid.form-control{
        border: 1px solid red;
    }
    h1{
        margin: 20px;
    }
    `]
})
export class LoginFormComponent {
    form: FormGroup;

    constructor(fb: FormBuilder, private authService: AuthService, private router: Router){
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });
    login(){
        const user = new User(this.form.value.username, this.form.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.form.reset();
    }
}