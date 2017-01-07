import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';
import { AuthService } from './auth/auth.service';
import { NewsService } from './news/news.service';

import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { CollisionTableComponent } from './unitydocs/collision-table.component';
import { SignUpFormComponent } from './auth/signup-form.component';
import { LoginFormComponent } from './auth/login-form.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { routing }         from './app.routing';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  routing, 
                  HttpModule ],

  declarations: [ AppComponent, 
                  SignUpFormComponent,   
                  LoginFormComponent,
                  HeaderComponent, 
                  HomeComponent,
                  CollisionTableComponent,
                  NewsComponent,
                  ForumComponent ],

  bootstrap:    [ AppComponent ],

  providers: [ PreventUnsavedChangesGuard, 
               AuthService,
               NewsService]
})
export class AppModule { 

}
