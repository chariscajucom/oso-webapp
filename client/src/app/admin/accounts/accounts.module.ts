import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccountsRoutes } from './accounts.routing';
import { AccountsComponent } from './accounts.component';
import { RegisterOrgComponent } from './register/register-org.component';
import { RemoveOrgComponent } from './remove/remove-org.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AccountsRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AccountsComponent, RegisterOrgComponent, RemoveOrgComponent]
})

export class AccountsModule {}
