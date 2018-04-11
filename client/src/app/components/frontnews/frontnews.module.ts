import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FrontNewsComponent } from './frontnews.component';
import { FrontNewsRoutes } from './frontnews.routing';
import { FrontNewsService } from '../../myservices/frontnews.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FrontNewsRoutes)
    ],
    providers: [ FrontNewsService ],
    declarations: [FrontNewsComponent]
})

export class FrontNewsModule {}
