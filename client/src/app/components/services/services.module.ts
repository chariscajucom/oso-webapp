import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesComponent } from './services.component';
import { ServiceRoutes } from './services.routing';
import { StudentsService } from '../../myservices/students.service'
import { OSOFormsService } from '../../myservices/osoForms.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ServiceRoutes)
    ],
    declarations: [ ServicesComponent ],
    providers: [ StudentsService, OSOFormsService ]
})

export class ServicesModule {}
