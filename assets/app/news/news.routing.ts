import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';

import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

const NEWS_ROUTES: Routes = [
    { path: '', component: NewsComponent},
    { path: 'news', component: NewsComponent },
];

export const newsRouting = RouterModule.forChild(NEWS_ROUTES);