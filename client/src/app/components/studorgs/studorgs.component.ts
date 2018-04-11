import { Component, OnInit } from '@angular/core';
import { StudOrgsService } from '../../myservices/studorgs.service';
@Component({
  selector: 'app-studorgs',
  templateUrl: './studorgs.component.html',
  styleUrls: ['../../../assets/css/now-ui-kit.css']

})
export class StudorgsComponent implements OnInit {

  fratsStudOrgs;
  acadsStudOrgs;

  constructor(
    private studorgsservice: StudOrgsService
  ) { }

  getallAcadOrgs(){
    this.studorgsservice.getAllAcadOrgs().subscribe(data => {
      this.acadsStudOrgs = data.studorgs;
    });
  }

  getallFratOrgs(){
    this.studorgsservice.getAllFratOrgs().subscribe(data => {
      this.fratsStudOrgs = data.studorgs;
    });
  }

  ngOnInit() {
    this.getallAcadOrgs();
  }

}
