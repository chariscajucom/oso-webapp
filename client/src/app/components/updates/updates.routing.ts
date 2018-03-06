import { Routes } from '@angular/router';
import { UpdatesComponent } from './updates.component';

export const UpdatesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: UpdatesComponent
    }]
}
];
