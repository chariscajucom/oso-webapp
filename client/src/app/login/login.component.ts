import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../myservices/auth.service';
import { Router } from '@angular/router';

declare var swal: any;
@Component({
  selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	message;
	messageClass;
	processing = false;

  constructor(
  	private formBuilder: FormBuilder,
  	private authService: AuthService,
  	private router: Router
  	) {
  		this.createForm();
  	 }

  	createForm(){

  	 	this.form = this.formBuilder.group({
  	 		username: ['', Validators.required],
  	 		password: ['', Validators.required]
  	 	});
	}

	disableForm(){
		this.form.controls['username'].disable();
		this.form.controls['password'].disable();
	}

	enableForm(){
		this.form.controls['username'].enable();
		this.form.controls['password'].enable();
	}


	onLoginSubmit(){
		this.processing = true;
		this.disableForm();
		const user = {
			username: this.form.get('username').value,
			password: this.form.get('password').value
		}
		this.authService.login(user).subscribe(data => {
			if(!data.success){
				this.messageClass ='alert alert-danger';
				this.message = data.message;
				this.processing = false;
				this.enableForm();
			} else{
					this.messageClass = 'alert alert-success';
					this.message = data.message;
          //expecting the token and the user
					this.authService.storeUserData(data.token, data.user.username);
						swal({
							title: 'Successfully Login!',
							text: '',
							type: 'success',
							timer: 1500,
							onOpen: () => {
								swal.showLoading()
							}
						})

					setTimeout(() => {
						if(data.user.role == "leader"){
							this.router.navigate(['/leader/dashboard']);
						}else{
							this.router.navigate(['/admin/dashboard']);
						}
					}, 2000)

			}
		});


	}
  ngOnInit() {
	if (this.authService.loggedIn) {
		this.router.navigate(['/admin/dashboard']);
	 }
  }

}
