import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnetSteamBlogComponent } from './unet-steam-blog.component';

import { unitysteamRouting } from './unitysteam.routing';
@NgModule({
    imports: [ 
        CommonModule,
        unitysteamRouting
    ],
    declarations: [
        UnetSteamBlogComponent,
    ]
})

export class UnitySteamModule {

}