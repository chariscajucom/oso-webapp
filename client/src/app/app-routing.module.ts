import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudorgsComponent } from './components/studorgs/studorgs.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { ServicesComponent } from './components/services/services.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
{ path: '', 
component: HomeComponent
 },
 {
 	path: 'login',
 	component: LoginComponent
 },
 {
 	path: 'register',
 	component: RegisterComponent
 },
 { path: 'about', 
	component: AboutComponent
 },
 { path: 'studorgs', 
	component: StudorgsComponent
 },
 { path: 'updates', 
	component: UpdatesComponent
 },
 { path: 'services', 
component: ServicesComponent
 },
{ path: '**',
 	component: HomeComponent

}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
