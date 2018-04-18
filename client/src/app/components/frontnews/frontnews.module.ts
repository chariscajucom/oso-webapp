import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

import { FrontNewsComponent } from './frontnews.component';
import { FrontNewsRoutes } from './frontnews.routing';
import { FrontNewsService } from '../../myservices/frontnews.service';

@NgModule({
    imports: [
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),    
        CommonModule,
        RouterModule.forChild(FrontNewsRoutes)
    ],
    providers: [ FrontNewsService ],
    declarations: [FrontNewsComponent]
})

export class FrontNewsModule {}
