import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../myservices/news.service';
@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
 
  message;
  messageClass;
  news;
  processing = false;
  currentUrl;
  loading = true;

  constructor( 
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
  ) 
  { }

  updateNewsSubmit(){
    this.processing = true; // form is disabled
    // console.log(this.news);
    this.newsService.editNews(this.news).subscribe(data =>{
       if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
       } else{
         this.messageClass = 'alert alert-success';
         this.message = data.message;
         setTimeout(() => {
          this.router.navigate(['/admin/news']);
         }, 2000);
       }
    });
  }
  
  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.newsService.getSingleNews(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      }else{
        this.news = data.news;
        this.loading = false;
      }
    });
  }

}
