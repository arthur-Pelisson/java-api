import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { InscriptionComponent }  from './inscription/inscription.component';
// import { UserComponent }  from './users/users.component';

// import { UserEditComponent } from './user-edit/user-edit.component';
  
const routes: Routes = [
  //  { path: '', component: InscriptionComponent },
  // { path: 'users', component: UsersComponent },
  // {
  //   path: 'user-list',
  //   component: UsersComponent
  // },
  // {
  //   path: 'user-add',
  //   component: UserEditComponent
  // },
  // {
  //   path: 'user-edit/:id',
  //   component: UserEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }
