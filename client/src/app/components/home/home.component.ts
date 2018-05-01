import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { contactusService } from '../../myservices/contactUs.service';
import { FrontNewsService } from '../../myservices/frontnews.service';

declare var swal: any;
declare var $: any;

@Component({
	moduleId: module.id,
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css', '../../../assets/css/now-ui-kit.css']
})
export class HomeComponent implements OnInit {

	frontNewsArticles: any;
	form: FormGroup;
	constructor(
		private formBuilder : FormBuilder,
		private contactusservice : contactusService,
		private frontnewsService : FrontNewsService
	) {
		this.createForm();
	 }
	
	 createForm(){
		this.form = this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.required,
				Validators.email
			])],
			message: ['', Validators.required]
		});
	 }

	 onFormSubmit(){
		 const formMessage ={
			 name: this.form.get('name').value,
			 email: this.form.get('email').value,
			 message: this.form.get('message').value
		 }
		 this.contactusservice.sendContactForm(formMessage).subscribe(data =>{
			 if(!data.success){
				console.log("No success!");
			 }else{
				this.form.reset();
			 }
		 });
	 }


	 getallFrontNews(){
		this.frontnewsService.getAllFrontNews().subscribe(data => {
		  this.frontNewsArticles = data.frontnews;
		});
	  }

  ngOnInit() {
	this.getallFrontNews();
  }

}
