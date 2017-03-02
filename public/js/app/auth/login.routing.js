import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';
var LOGIN_ROUTES = [
    { path: '', component: LoginFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
];
export var loginRouting = RouterModule.forChild(LOGIN_ROUTES);
