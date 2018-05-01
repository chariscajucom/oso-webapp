import { Component, OnInit } from '@angular/core';
import { StudOrgsService } from '../../myservices/studorgs.service';
@Component({
  selector: 'app-studorgs',
  templateUrl: './studorgs.component.html',
  styleUrls: ['../../../assets/css/now-ui-kit.css', './studorgs.component.css']

})
export class StudorgsComponent implements OnInit {

  hagonoyStudOrgs: any;
  menesesStudOrgs: any;
  sarmientoStudOrgs: any;
  cafaStudOrgs: any;
  calStudOrgs: any;
  cbaStudOrgs: any;
  ccjeStudOrgs: any;
  coedStudOrgs: any;
  coeStudOrgs: any;
  cheStudOrgs: any;
  citStudOrgs: any;
  cictStudOrgs: any;
  conStudOrgs: any;
  copersStudOrgs: any;
  csStudOrgs: any;
  csspStudOrgs: any;
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

  getallHagonoyOrgs(){
    this.studorgsservice.getAllHagonoyOrgs().subscribe(data=>{
      this.hagonoyStudOrgs = data.studorgs;
    });
  }

  getallMenesesOrgs(){
    this.studorgsservice.getAllMenesesOrgs().subscribe(data=>{
      this.menesesStudOrgs = data.studorgs;
    });
  }

  getallSarmientoOrgs(){
    this.studorgsservice.getAllSarmientoOrgs().subscribe(data=>{
      this.sarmientoStudOrgs = data.studorgs;
    });
  }

  
  getallCAFAOrgs(){
    this.studorgsservice.getAllCAFAOrgs().subscribe(data=>{
      this.cafaStudOrgs = data.studorgs;
    });    
}

getallCALOrgs(){
  this.studorgsservice.getAllCALOrgs().subscribe(data=>{
    this.calStudOrgs = data.studorgs;
  });
    
}

getallCBAOrgs(){
  this.studorgsservice.getAllCBAOrgs().subscribe(data=>{
    this.cbaStudOrgs = data.studorgs;
  });
}

getallCCJEOrgs(){
  this.studorgsservice.getAllCCJEOrgs().subscribe(data=>{
    this.ccjeStudOrgs = data.studorgs;
  });
}

getallCOEDOrgs(){
  this.studorgsservice.getAllCOEDOrgs().subscribe(data=>{
    this.coedStudOrgs = data.studorgs;
  });
}

getallCOEOrgs(){
  this.studorgsservice.getAllCOEOrgs().subscribe(data=>{
    this.coeStudOrgs = data.studorgs;
  });
}

getallCHEOrgs(){
  this.studorgsservice.getAllCHEOrgs().subscribe(data=>{
    this.cheStudOrgs = data.studorgs;
  });
}

getallCITOrgs(){
  this.studorgsservice.getAllCITOrgs().subscribe(data=>{
    this.citStudOrgs = data.studorgs;
  });
}

getallCICTOrgs(){
  this.studorgsservice.getAllCICTOrgs().subscribe(data=>{
    this.cictStudOrgs = data.studorgs;
  });
}

getallCONOrgs(){
  this.studorgsservice.getAllCONOrgs().subscribe(data=>{
    this.conStudOrgs = data.studorgs;
  });
}

getallCOPERSOrgs(){
  this.studorgsservice.getAllCOPERSOrgs().subscribe(data=>{
    this.copersStudOrgs = data.studorgs;
  });
}

getallCSOrgs(){
  this.studorgsservice.getAllCSOrgs().subscribe(data=>{
    this.csStudOrgs = data.studorgs;
  });
}

getallCSSPOrgs(){
  this.studorgsservice.getAllCSSPOrgs().subscribe(data=>{
    this.csspStudOrgs = data.studorgs;
  });
}

  ngOnInit() {
    this.getallAcadOrgs();
  }

}
