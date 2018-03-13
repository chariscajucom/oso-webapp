import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from '../../myservices/students.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../../../assets/css/now-ui-kit.css']

})
export class ServicesComponent implements OnInit {
  
  form: FormGroup;
  message;
  messageClass;
  validStudent = false;
  validated = false;
  processing = false;
  constructor(
    private formBuilder: FormBuilder,
    private studService: StudentsService
  ) { 
    this.validateStudentForm();
  }

  validateStudentForm(){
    this.form = this.formBuilder.group({
      studnum: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        this.numericValidator
      ])],
      studname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ])]
    })
  }

  enableFormvalidateStudentForm(){
    this.form.get('studnum').enable();
    this.form.get('studname').enable();

  }

  disableFormvalidateStudentForm(){
    this.form.get('studnum').disable();
    this.form.get('studname').disable();
  }

  numericValidator(controls){
    const regExp = new RegExp(/^[0-9]*$/);
    if(regExp.test(controls.value)){
			return null;
		} else {
			return { 'numericValidator': true }
		}
  }
  
  studentValidation(){
    this.validStudent = true;
    this.validated = false;
  }

  onFormSubmit(){
    // console.log(this.form.get('studnum').value);
    // console.log(this.form.get('studname').value);
    this.processing = true;
    this.disableFormvalidateStudentForm();

    const student = {
      studnum: this.form.get('studnum').value,
      studname: this.form.get('studname').value
    }
   this.studService.validation(student).subscribe(data => {
     console.log(data);
     if(!data.success){
        this.messageClass ='alert alert-danger';
				this.message = data.message;
				this.enableFormvalidateStudentForm();
     } else{
      this.messageClass = 'alert alert-success';
      this.message = data.message;
      this.validStudent = false;
      this.validated = true;

     }
   });
  }
  ngOnInit() {
  }

}
