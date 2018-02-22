import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AboutRoutes)
    ],
    declarations: [AboutComponent]
})

export class AboutModule {}
