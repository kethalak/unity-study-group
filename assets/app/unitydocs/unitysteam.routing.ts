import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnetSteamBlogComponent } from './unet-steam-blog.component';

import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

const UNITYSTEAM_ROUTES: Routes = [
    { path: '', component: UnetSteamBlogComponent },
];

export const unitysteamRouting = RouterModule.forChild(UNITYSTEAM_ROUTES);