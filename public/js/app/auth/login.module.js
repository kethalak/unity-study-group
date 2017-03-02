import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';
import { AuthService } from './auth.service';
import { loginRouting } from './login.routing';
export var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    LoginModule.ctorParameters = [];
    return LoginModule;
}());
