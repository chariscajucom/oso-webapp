import { Component, OnInit } from '@angular/core';
import { StudOrgsService } from '../../myservices/studorgs.service';
@Component({
  selector: 'app-studorgs',
  templateUrl: './studorgs.component.html',
  styleUrls: ['../../../assets/css/now-ui-kit.css']

})
export class StudorgsComponent implements OnInit {

  bustosStudOrgs: any;
  spiritStudOrgs: any;
  socioStudOrgs: any;
  poliStudOrgs: any;
  lifeStudOrgs: any;
  envStudOrgs: any;
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

  getallEnvOrgs(){
    this.studorgsservice.getAllEnvOrgs().subscribe(data => {
      this.envStudOrgs = data.studorgs;
    }); 
  }

  getallLifeOrgs(){
    this.studorgsservice.getAllLifeOrgs().subscribe(data => {
      this.lifeStudOrgs = data.studorgs;
    });
  }

  getallPoliOrgs(){
    this.studorgsservice.getAllPoliOrgs().subscribe(data => {
      this.poliStudOrgs = data.studorgs;
    });
  }

  getallSocioOrgs(){
    this.studorgsservice.getAllSocioOrgs().subscribe(data => {
      this.socioStudOrgs = data.studorgs;
    });
  }

  getallSpiritOrgs(){
    this.studorgsservice.getAllSpiritOrgs().subscribe(data =>{
      this.spiritStudOrgs = data.studorgs;
    });
  }

  getallBustosOrgs(){
    this.studorgsservice.getAllBustosOrgs().subscribe(data => {
      this.bustosStudOrgs = data.studorgs;
    });
  }
  
  ngOnInit() {
    this.getallAcadOrgs();
  }

}
