import { Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { EditComponent } from './edit/edit.component'

export const NewsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: NewsComponent,
        children: [{

	    	path: 'edit',
	    	component: EditComponent
	    
        }]
    },



    ]
}
];
