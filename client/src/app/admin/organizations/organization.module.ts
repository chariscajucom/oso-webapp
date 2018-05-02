import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OrgRoutes } from './organization.routing';
import { OrganizationsComponent } from './organization.component';
import { RegisterOrgComponent } from './register/register-org.component';
import { RemoveOrgComponent } from './remove/remove-org.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OrgRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [OrganizationsComponent, RegisterOrgComponent, RemoveOrgComponent]
})

export class OrganizationModule {}
