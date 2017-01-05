import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './auth/login-form.component';
import { SignUpFormComponent } from './auth/signup-form.component';
import { HomeComponent } from './home/home.component';
import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignUpFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'login', component: LoginFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: '**', component: HomeComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
