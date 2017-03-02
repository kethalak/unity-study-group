import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
var NEWS_ROUTES = [
    { path: '', component: NewsComponent },
    { path: 'news', component: NewsComponent },
];
export var newsRouting = RouterModule.forChild(NEWS_ROUTES);
