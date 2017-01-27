import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './auth/login-form.component';
import { SignUpFormComponent } from './auth/signup-form.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';
import { CollisionTableComponent } from './unitydocs/collision-table.component';
import { UnetSteamBlogComponent } from './unitydocs/unet-steam-blog.component';
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignUpFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'login', component: LoginFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'collisiontable', component: CollisionTableComponent },
    { path: 'unetsteamblog', component: UnetSteamBlogComponent },
    { path: 'news', component: NewsComponent },
    { path: 'forum', component: ForumComponent },
    { path: '**', component: HomeComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
