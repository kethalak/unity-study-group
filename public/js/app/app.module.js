import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';
import { AuthService } from './auth/auth.service';
import { SignUpFormComponent } from './auth/signup-form.component';
import { LoginFormComponent } from './auth/login-form.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule,
                        FormsModule,
                        ReactiveFormsModule,
                        routing,
                        HttpModule],
                    declarations: [AppComponent,
                        SignUpFormComponent,
                        LoginFormComponent,
                        HeaderComponent,
                        HomeComponent,],
                    bootstrap: [AppComponent],
                    providers: [PreventUnsavedChangesGuard,
                        AuthService]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
