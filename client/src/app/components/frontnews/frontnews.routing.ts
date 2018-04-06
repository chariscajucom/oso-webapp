import { Routes } from '@angular/router';
import { FrontNewsComponent } from './frontnews.component';

export const FrontNewsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: FrontNewsComponent
    }]
}
];
