import { RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { CollisionTableComponent } from './unitydocs/collision-table.component';
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'login', loadChildren: './auth/login.module#LoginModule' },
    { path: 'signup', loadChildren: './auth/signup.module#SignupModule' },
    { path: 'unetsteam', loadChildren: './unitydocs/unitysteam.module#UnitySteamModule' },
    { path: 'news', loadChildren: './news/news.module#NewsModule' },
    { path: 'collisiontable', component: CollisionTableComponent },
    { path: 'forum', component: ForumComponent },
    { path: '**', component: HomeComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
