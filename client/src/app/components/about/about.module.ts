import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';
import {OsoPrimerService} from '../../myservices/osoPrimer.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AboutRoutes)
    ],
    providers: [OsoPrimerService],
    declarations: [AboutComponent]
})

export class AboutModule {}
