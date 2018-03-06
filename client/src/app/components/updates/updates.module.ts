import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UpdatesComponent } from './updates.component';
import { UpdatesRoutes } from './updates.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UpdatesRoutes)
    ],
    declarations: [UpdatesComponent]
})

export class UpdatesModule {}
