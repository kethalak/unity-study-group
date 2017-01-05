import { Routes } from "@angular/router";

import { SignUpFormComponent } from "./signup-form.component";
import { LoginFormComponent } from "./login-form.component";


export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignUpFormComponent },
    { path: 'login', component: LoginFormComponent },

];