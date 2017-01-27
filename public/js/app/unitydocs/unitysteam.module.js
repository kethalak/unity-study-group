import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnetSteamBlogComponent } from './unet-steam-blog.component';
import { unitysteamRouting } from './unitysteam.routing';
export var UnitySteamModule = (function () {
    function UnitySteamModule() {
    }
    UnitySteamModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        unitysteamRouting
                    ],
                    declarations: [
                        UnetSteamBlogComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    UnitySteamModule.ctorParameters = [];
    return UnitySteamModule;
}());
