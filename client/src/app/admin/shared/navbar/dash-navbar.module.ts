import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashNavbarComponent } from './dash-navbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ DashNavbarComponent ],
    exports: [ DashNavbarComponent ]
})

export class DashNavbarModule {}
