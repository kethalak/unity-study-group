import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpFormComponent } from './signup-form.component';


import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

const SIGNUP_ROUTES: Routes = [
    { path: '', component: SignUpFormComponent, canDeactivate: [ PreventUnsavedChangesGuard ] },
];

export const signupRouting = RouterModule.forChild(SIGNUP_ROUTES);