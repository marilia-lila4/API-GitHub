import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from './app.component';
import { GithubService } from './github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserStarredComponent } from './user-starred/user-starred.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupByPipe } from './group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserReposComponent,
    UserStarredComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterTestingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: 
  [
    GithubService,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
