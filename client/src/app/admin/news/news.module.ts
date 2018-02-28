import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NewsRoutes)
    ],
    declarations: [NewsComponent]
})

export class NewsModule {}
