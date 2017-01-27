import { RouterModule } from '@angular/router';
import { UnetSteamBlogComponent } from './unet-steam-blog.component';
var UNITYSTEAM_ROUTES = [
    { path: '', component: UnetSteamBlogComponent },
];
export var unitysteamRouting = RouterModule.forChild(UNITYSTEAM_ROUTES);
