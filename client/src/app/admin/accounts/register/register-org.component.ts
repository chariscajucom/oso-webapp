import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../myservices/auth.service';
import { StudOrgsService } from '../../../myservices/studorgs.service';

declare var swal: any;
@Component({
	selector: 'reg-dash',
    moduleId: module.id,
    templateUrl: 'register-org.component.html'
})

export class RegisterOrgComponent implements OnInit {
    model: any = {};
    studOrgs: any;
    loading = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private studorgsservice: StudOrgsService) { }

    getAllOrgs(){
            this.studorgsservice.getAllOrgs().subscribe(data => {
              this.studOrgs = data.studorgs;
            console.log(this.studOrgs)
            });
    }
    
    register() {
        this.loading = true;
        this.authService.registerUser(this.model)
            .subscribe(
                data => {
                  console.log('data', data)
                  swal(
                    'Account Registered!',
                    '',
                    'success'
                  )
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                },
                error => {
                    this.loading = false;
                    console.log('error' ,error)
                });
    }
    ngOnInit(){
        this.getAllOrgs();
        
    }
}
