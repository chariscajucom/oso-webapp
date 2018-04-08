import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StudorgsComponent } from './studorgs.component';
import { StudorgsRoutes } from './studorgs.routing';
import { StudOrgsService } from '../../myservices/studorgs.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StudorgsRoutes)
    ],
    providers: [ StudOrgsService ],
    declarations: [StudorgsComponent]
})

export class StudorgsModule {}
