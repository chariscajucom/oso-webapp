import { Component, OnInit } from '@angular/core';
import { StudLeaderFormsService } from '../../myservices/studleaderForms.service';

@Component({
  selector: 'app-pdfforms',
  templateUrl: './pdfforms.component.html',
  styleUrls: ['./pdfforms.component.css']
})
export class PdfformsComponent implements OnInit {

  wuforms: any;
  scforms: any;
  ouforms: any;
  sampforms: any;
  rerforms: any;
  renewalforms: any;
  ebforms: any;
  osoForms: any;
  
  constructor(
    private studleaderFormsService: StudLeaderFormsService
  ) {}

  getallEBForms(){
    this.studleaderFormsService.getallEBForms().subscribe(data => {
      this.ebforms = data.osoforms;
    });
  }

  getallRenewalForms(){
  this.studleaderFormsService.getallRenewalForms().subscribe(data=>{
    this.renewalforms = data.osoforms;
  });
  }

  getallRERForms(){
    this.studleaderFormsService.getallRERForms().subscribe(data=>{
      this.rerforms = data.osoforms;
  });
  }

  getallSampleLettersForms(){
    this.studleaderFormsService.getallSampleLettersForms().subscribe(data=>{
      this.sampforms = data.osoforms;
  });
  }
  
  getallOUForms(){
    this.studleaderFormsService.getallOUForms().subscribe(data=>{
      this.ouforms = data.osoforms;
  });
  }
  getallSCForms(){
    this.studleaderFormsService.getallSCForms().subscribe(data=>{
      this.scforms = data.osoforms;
  });
  }
  getallWUForms(){
    this.studleaderFormsService.getallWUForms().subscribe(data=>{
      this.wuforms = data.osoforms;
  });
  }

  ngOnInit() {
    this.getallEBForms();
  }

}
