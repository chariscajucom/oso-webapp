import { RouterModule, Routes } from '@angular/router';

import { EditNewsComponent } from './edit-news/edit-news.component';
import { NewsComponent } from './news.component';

export const NewsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: '',
        component: NewsComponent
    },
    {
      path: 'edit',
      component: EditNewsComponent
    }
    ]
}
];
