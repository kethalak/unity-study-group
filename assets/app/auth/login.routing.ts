import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form.component';
import { SignUpFormComponent } from './signup-form.component';


import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

const LOGIN_ROUTES: Routes = [
    { path: '', component: LoginFormComponent, canDeactivate: [ PreventUnsavedChangesGuard ]},
];

export const loginRouting = RouterModule.forChild(LOGIN_ROUTES);