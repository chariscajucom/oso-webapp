import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterRoutes } from './register.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(RegisterRoutes)
    ],
    declarations: [RegisterComponent]
})

export class RegisterModule {}

