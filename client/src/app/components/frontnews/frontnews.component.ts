import { Component, OnInit } from '@angular/core';
import { FrontNewsService } from '../../myservices/frontnews.service';

@Component({
  selector: 'app-frontnews',
  templateUrl: './frontnews.component.html',
  styleUrls: ['../../../assets/css/now-ui-kit.css']

})
export class FrontNewsComponent implements OnInit {

  frontNewsArticles;
  constructor( private frontnewsService: FrontNewsService ) { }

  getallFrontNews(){
    this.frontnewsService.getAllFrontNews().subscribe(data => {
      this.frontNewsArticles = data.frontnews;
    });
  }

  ngOnInit() {
    this.getallFrontNews();
  }

}
