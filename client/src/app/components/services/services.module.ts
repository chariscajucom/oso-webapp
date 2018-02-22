import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { ServiceRoutes } from './services.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ServiceRoutes)
    ],
    declarations: [ServicesComponent]
})

export class ServicesModule {}
