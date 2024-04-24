import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:'register', component:RegisterFormComponent},
  {path:'login', component:LogInComponent},

  {path:'', redirectTo:'register',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
