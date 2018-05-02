import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ActivitiesComponent } from './activities.component';
import { ActivitiesRoutes } from './activities.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ActivitiesRoutes)
    ],
    declarations: [ActivitiesComponent]
})

export class ActivitiesModule {}
