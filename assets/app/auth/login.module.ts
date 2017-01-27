import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpFormComponent } from './signup-form.component';
import { LoginFormComponent } from './login-form.component';

import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';
import { AuthService } from './auth.service';

import { loginRouting } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        loginRouting
    ],
    declarations: [
        LoginFormComponent
    ],
    providers: [
        AuthService,
        PreventUnsavedChangesGuard
    ]
})

export class LoginModule{

}