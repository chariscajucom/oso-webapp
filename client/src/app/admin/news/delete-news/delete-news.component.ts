import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../myservices/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.css']
})
export class DeleteNewsComponent implements OnInit {
  message;
  messageClass;
  foundNews = false;
  processing = false;
  news;
  currentUrl;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // Function to delete news
  deleteNews() {
    this.processing = true; // Disable buttons
    // Function for DELETE request
    this.newsService.deleteNews(this.currentUrl.id).subscribe(data => {
      // Check if delete request worked
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error bootstrap class
        this.message = data.message; // Return error message
      } else {
        this.messageClass = 'alert alert-success'; // Return bootstrap success class
        this.message = data.message; // Return success message
        // After two second timeout, route to news page
        setTimeout(() => {
          this.router.navigate(['/admin/dashboard']); // Route users to news page
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
    // Function for GET request to retrieve news
    this.newsService.getSingleNews(this.currentUrl.id).subscribe(data => {
      // Check if request was successfull
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return bootstrap error class
        this.message = data.message; // Return error message
      } else {
        // Create the news object to use in HTML
        this.news = {
          title: data.news.title, // Set title
          body: data.news.body, // Set body
          createdBy: data.news.createdBy, // Set created_by field
          createdAt: data.news.createdAt // Set created_at field
        }
        this.foundNews = true; // Displaly news window
      }
    });
  }

}