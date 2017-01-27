import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from './news.service';
import { NewsComponent } from './news.component';
import { SpinnerComponent } from '../shared/spinner.component';
import { PaginationDirective } from '../shared/pagination.directive';
import { newsRouting } from './news.routing';
export var NewsModule = (function () {
    function NewsModule() {
    }
    NewsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        newsRouting
                    ],
                    declarations: [
                        NewsComponent,
                        SpinnerComponent,
                        PaginationDirective,
                    ],
                    providers: [
                        NewsService
                    ]
                },] },
    ];
    /** @nocollapse */
    NewsModule.ctorParameters = [];
    return NewsModule;
}());
