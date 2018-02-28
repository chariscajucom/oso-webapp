import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PDFormsComponent } from './pdforms.component';
import { PDFRoutes } from './pdforms.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PDFRoutes)
    ],
    declarations: [PDFormsComponent]
})

export class PDFModule {}
