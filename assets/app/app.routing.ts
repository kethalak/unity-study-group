import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { CollisionTableComponent } from './unitydocs/collision-table.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', loadChildren: './auth/login.module#LoginModule'},
    { path: 'signup', loadChildren: './auth/signup.module#SignupModule' },
    { path: 'unetsteam', loadChildren: './unitydocs/unitysteam.module#UnitySteamModule' },
    { path: 'news', loadChildren: './news/news.module#NewsModule' },
    { path: 'collisiontable', component: CollisionTableComponent },
    { path: 'forum', component: ForumComponent },
    { path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
