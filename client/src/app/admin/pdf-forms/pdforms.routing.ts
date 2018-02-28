import { Routes } from '@angular/router';

import { PDFormsComponent } from './pdforms.component';

export const PDFRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PDFormsComponent
    }]
}
];
