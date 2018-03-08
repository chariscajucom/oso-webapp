import { FrontComponent } from './components/front.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard.service';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { 
      path: 'login' , 
      component : LoginComponent},
    { path: 'register' , component : RegisterComponent },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate : [AuthGuard],
      children: [
        { path: '', loadChildren: './admin/dashboard/dashboard.module#DashboardModule'},
        { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardModule'},
        { path: 'news', loadChildren: './admin/news/news.module#NewsModule'
      },
        { path: 'announcement', loadChildren: './admin/announcement/announcement.module#AnnouncementModule'},
        { path: 'activities', loadChildren: './admin/activities/activities.module#ActivitiesModule'},
        { path: 'pdf-forms', loadChildren: './admin/pdf-forms/pdforms.module#PDFModule'},
      ]
    },
    // {
    //   path: 'edit-news/:id', component: EditNewsComponent
    // },
    {
      path: '',
      component: FrontComponent,  
      children: [
      { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
      { path: 'about', loadChildren: './components/about/about.module#AboutModule' },
      { path: 'services', loadChildren: './components/services/services.module#ServicesModule' },
      { path: 'studorgs', loadChildren: './components/studorgs/studorgs.module#StudorgsModule' },
      { path: 'updates', loadChildren: './components/updates/updates.module#UpdatesModule' }
      ]
<<<<<<< HEAD
    }
];
=======
    },
    { path: '**' , redirectTo : '' }
];
>>>>>>> b14ff3e8b19c3d0a911368b7b81e79341d523dd0
