import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'sample',
  component:SampleComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
