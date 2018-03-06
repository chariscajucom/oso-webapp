import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../myservices/auth.service';
import { BlogService } from '../../myservices/blog.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['../../../assets/css/now-ui-kit.css']

})
export class UpdatesComponent implements OnInit {

blogPosts;
  constructor(
    private blogService: BlogService
  ) { }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(data =>{
      this.blogPosts = data.blogs;
    });
  }


  ngOnInit() {
    this.getAllBlogs();
  }

}
