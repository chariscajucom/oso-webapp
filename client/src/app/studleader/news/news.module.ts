import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';


@NgModule({
    imports: [
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),    
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(NewsRoutes)
    ],
    declarations: [ NewsComponent ]
})

export class NewsModule {}