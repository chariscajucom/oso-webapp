import { Routes } from '@angular/router';

import { ServicesComponent } from './services.component';

export const ServiceRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: '',
        component: ServicesComponent
    }]
}
];
