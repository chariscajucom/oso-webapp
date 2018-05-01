import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { contactusService } from '../../myservices/contactUs.service';
import { FrontNewsService } from '../../myservices/frontnews.service';

@NgModule({
    imports: [
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),    
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(HomeRoutes)
    ],
    providers: [ contactusService, FrontNewsService ],
    declarations: [HomeComponent]
})

export class HomeModule {}
