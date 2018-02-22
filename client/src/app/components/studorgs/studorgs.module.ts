import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StudorgsComponent } from './studorgs.component';
import { StudorgsRoutes } from './studorgs.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StudorgsRoutes)
    ],
    declarations: [StudorgsComponent]
})

export class StudorgsModule {}
