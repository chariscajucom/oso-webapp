import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NewsRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [NewsComponent,EditComponent]
})

export class NewsModule {}
