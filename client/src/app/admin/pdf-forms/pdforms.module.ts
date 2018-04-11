import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PDFormsComponent } from './pdforms.component';
import { PDFRoutes } from './pdforms.routing';
import { FileUploadModule } from 'ng2-file-upload';
import { PdfFormsService } from '../../myservices/pdfforms.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PDFRoutes),
        FileUploadModule
    ],
    providers: [ PdfFormsService ],
    declarations: [PDFormsComponent]
})

export class PDFModule {}
