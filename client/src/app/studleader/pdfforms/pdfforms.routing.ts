import { Routes } from '@angular/router';
import { PdfformsComponent } from './pdfforms.component';


export const PdfFormRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PdfformsComponent
    }]
}
];
