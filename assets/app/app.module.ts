import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SlackService } from './slack/slack.service';
import { AuthService } from './auth/auth.service';

import { AppComponent }   from './app.component';
import { ForumComponent } from './forum/forum.component';
import { CollisionTableComponent } from './unitydocs/collision-table.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { SlackInviteComponent } from './slack/slack-invite.component';
import { routing }         from './app.routing';

@NgModule({
  imports:      [ BrowserModule, 
                  routing, 
                  HttpModule,
                  FormsModule ],

  declarations: [ AppComponent, 
                  HeaderComponent, 
                  HomeComponent,
                  ForumComponent,
                  SlackInviteComponent,
                  CollisionTableComponent ],

  bootstrap:    [ AppComponent ],

  providers: [ SlackService,
              AuthService, ]
})
export class AppModule { 

}
