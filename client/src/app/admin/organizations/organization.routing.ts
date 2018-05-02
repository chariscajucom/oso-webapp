import { Routes } from '@angular/router';

import { OrganizationsComponent } from './organization.component';
import { RegisterOrgComponent } from './register/register-org.component';
import { RemoveOrgComponent } from './remove/remove-org.component';

export const OrgRoutes: Routes = [
    {

      path: '',
      children: [{
        path: '',
        component: OrganizationsComponent,
        children: [
            { path: 'register', component: RegisterOrgComponent },
            { path: 'remove', component: RemoveOrgComponent }
        ]
    }
]
}
];
