import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FrontNewsComponent } from './frontnews.component';
import { FrontNewsRoutes } from './frontnews.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FrontNewsRoutes)
    ],
    declarations: [FrontNewsComponent]
})

export class FrontNewsModule {}
