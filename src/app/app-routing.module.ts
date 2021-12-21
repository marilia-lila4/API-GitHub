import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserStarredComponent } from './user-starred/user-starred.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users/:login/repos', component: UserReposComponent },
  { path: 'users/:login/starred', component: UserStarredComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
