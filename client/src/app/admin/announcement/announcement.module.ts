import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AnnouncementComponent } from './announcement.component';
import { AnnouncementRoutes } from './announcement.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AnnouncementRoutes)
    ],
    declarations: [AnnouncementComponent]
})

export class AnnouncementModule {}
