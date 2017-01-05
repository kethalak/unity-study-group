import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    constructor(private router : Router, private authService: AuthService){
        
    }
    
    isLoggedIn(){
        return this.authService.isLoggedIn();
    }
    
    onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'signin']);
    }
}