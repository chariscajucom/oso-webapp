import { Component, OnInit } from '@angular/core';
import {OsoPrimerService} from '../../myservices/osoPrimer.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {
  osoPrimercontent;

  constructor(
    private osoprimerservice: OsoPrimerService
  ) { }

  getallcontent(){
    this.osoprimerservice.getAllcontent().subscribe(data => {
      this.osoPrimercontent = data.osoprimers;
    });
  }
ngOnInit(){

}
}
