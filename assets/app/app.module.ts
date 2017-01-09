import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SlackService } from './slack/slack.service';
import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard.service';
import { AuthService } from './auth/auth.service';
import { NewsService } from './news/news.service';

import { PaginationDirective } from './shared/pagination.directive';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { CollisionTableComponent } from './unitydocs/collision-table.component';
import { SignUpFormComponent } from './auth/signup-form.component';
import { LoginFormComponent } from './auth/login-form.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './shared/spinner.component';
import { SlackInviteComponent } from './slack/slack-invite.component';
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
                  ForumComponent,
                  SpinnerComponent,
                  SlackInviteComponent,
                  PaginationDirective ],

  bootstrap:    [ AppComponent ],

  providers: [ SlackService,
               PreventUnsavedChangesGuard, 
               AuthService,
               NewsService]
})
export class AppModule { 

}
