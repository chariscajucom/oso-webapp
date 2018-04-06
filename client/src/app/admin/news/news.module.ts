import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(NewsRoutes)
    ],
    declarations: [ NewsComponent, EditNewsComponent, DeleteNewsComponent ]
})

export class NewsModule {}