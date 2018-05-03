import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../myservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {

  ngOnInit() {
  }

}
