import { RouterModule } from '@angular/router';
import { SignUpFormComponent } from './signup-form.component';
import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';
var SIGNUP_ROUTES = [
    { path: '', component: SignUpFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
];
export var signupRouting = RouterModule.forChild(SIGNUP_ROUTES);
