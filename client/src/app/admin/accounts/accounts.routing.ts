import { Routes } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { RegisterOrgComponent } from './register/register-org.component';
import { RemoveOrgComponent } from './remove/remove-org.component';

export const AccountsRoutes: Routes = [
    {

      path: '',
      children: [{
        path: '',
        component: AccountsComponent,
        children: [
            { path: 'register', component: RegisterOrgComponent },
            { path: 'remove', component: RemoveOrgComponent }
        ]
    }
]
}
];
