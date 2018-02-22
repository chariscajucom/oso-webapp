import { Routes } from '@angular/router';

import { StudorgsComponent } from './studorgs.component';

export const StudorgsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: StudorgsComponent
    }]
}
];
