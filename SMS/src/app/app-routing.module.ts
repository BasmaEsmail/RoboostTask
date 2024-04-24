import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { AuthGuardService } from './Shared/Guards/auth-guard.service';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./Modules/user-auth/user-auth.module').then(s=>s.UserAuthModule)},
  {path:'',component:NavBarComponent,children:[

    {path:'student',loadChildren:()=>import('./Modules/student/student.module').then(s=>s.StudentModule),canActivate:[AuthGuardService]},
    {path:'**',redirectTo:'student'},
  ]}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
