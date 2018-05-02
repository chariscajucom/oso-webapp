import { FrontComponent } from './components/front.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard.service';
import { PageErrorComponent } from './page-error/page-error.component';
import { StudLeaderComponent } from './studleader/studleader.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {  path: 'login' ,  component : LoginComponent  },
    { path: 'register' , component : RegisterComponent },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate : [AuthGuard],
      data: {
        expectedRole: 'admin'
      },
      children: [
        { path: '', loadChildren: './admin/dashboard/dashboard.module#DashboardModule'},
        { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardModule'},
        { path: 'news', loadChildren: './admin/news/news.module#NewsModule'},
        { path: 'announcement', loadChildren: './admin/announcement/announcement.module#AnnouncementModule'},
        { path: 'activities', loadChildren: './admin/activities/activities.module#ActivitiesModule'},
        { path: 'pdf-forms', loadChildren: './admin/pdf-forms/pdforms.module#PDFModule'},
        { path: 'organizations', loadChildren: './admin/organizations/organization.module#OrganizationModule'},
      ]
    },
    {
      path: 'leader',
      component: StudLeaderComponent,
      canActivate : [AuthGuard],
      children: [
        { path: '', loadChildren: './studleader/dashboard/dashboard.module#DashboardModule'},
        { path: 'dashboard', loadChildren: './studleader/dashboard/dashboard.module#DashboardModule'},
        // { path: 'news', loadChildren: './studleader/news/news.module#NewsModule'},
        { path: 'activities', loadChildren: './studleader/activities/activities.module#ActivitiesModule'},
        // { path: 'pdf-forms', loadChildren: './studleader/pdf-forms/pdforms.module#PDFModule'},
      ]
    },
    {
      path: '',
      component: FrontComponent,  
      children: [
      { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
      { path: 'about', loadChildren: './components/about/about.module#AboutModule' },
      { path: 'services', loadChildren: './components/services/services.module#ServicesModule' },
      { path: 'studorgs', loadChildren: './components/studorgs/studorgs.module#StudorgsModule' },
      { path: 'frontnews', loadChildren: './components/frontnews/frontnews.module#FrontNewsModule' }
      ]
    },
    { path: '**' , component : PageErrorComponent }
];
