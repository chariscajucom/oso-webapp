import { Routes } from '@angular/router';

import { FrontComponent } from './components/front.component';
import { AdminComponent } from './admin/admin.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'dashboard',
      component: AdminComponent,
      children: [
      // { path: '', loadChildren: './dashboard/dashboard#DashboardModule'}
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
      { path: 'updates', loadChildren: './components/updates/updates.module#UpdatesModule' },
      ]
    }
];