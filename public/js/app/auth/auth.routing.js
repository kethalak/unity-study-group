import { SignUpFormComponent } from "./signup-form.component";
import { LoginFormComponent } from "./login-form.component";
export var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignUpFormComponent },
    { path: 'login', component: LoginFormComponent },
];
