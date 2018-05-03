import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PdfFormRoutes } from './pdfforms.routing';
import { PdfformsComponent } from './pdfforms.component';
import { StudLeaderFormsService } from '../../myservices/studleaderForms.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PdfFormRoutes)
    ],
    declarations: [PdfformsComponent],
    providers: [ StudLeaderFormsService ]
})

export class PdfFormModule {}
