import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
export var HeaderComponent = (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.css']
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: Router, },
        { type: AuthService, },
    ];
    return HeaderComponent;
}());
