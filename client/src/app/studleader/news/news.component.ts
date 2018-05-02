import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../myservices/news.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../myservices/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  username;
  processing: boolean;
  loadingNews;
  commentForm;
  newsArticles;
  newComment = [];
  enabledComments = [];

  constructor(
    private newsService: NewsService,
    private formBuilder : FormBuilder,
    private authService : AuthService
  ) { 
    this.createCommentForm();
  }

  createCommentForm(){
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ])]
    });
  }

  enableCommentForm(){
    this.commentForm.get('comment').enable();
  }

  disableCommentForm(){
    this.commentForm.get('comment').disable();
  }

  reloadNews(){
    this.loadingNews = true;
    this.getAllNews();
    setTimeout(() => {
    this.loadingNews = false;
  }, 4000);
  }
  
  draftComment(id){
    this.commentForm.reset();
    this.newComment = [];
    this.newComment.push(id);
  }
  
  cancelSubmission(id){
    const index = this.newComment.indexOf(id);
    this.newComment.splice(index, 1);
    this.commentForm.reset();
    this.enableCommentForm();
    this.processing = false;
  }
  
  getAllNews(){  
    this.newsService.getAllNews().subscribe(data =>{
      this.newsArticles = data.news;
    });
  }

  likeNews(id){
    this.newsService.likeNews(id).subscribe(data => {
      this.getAllNews();
    });
  }

  dislikeNews(id){
    this.newsService.dislikeNews(id).subscribe(data => {
      this.getAllNews();
    });
  }

  postComment(id){
    this.disableCommentForm();
    this.processing= true;
    const comment = this.commentForm.get('comment').value;
    this.newsService.postComment(id, comment).subscribe(data=>
    {
      this.getAllNews();
      const index = this.newComment.indexOf(id);
      this.newComment.splice(index, 1);
      this.enableCommentForm();
      this.commentForm.reset();
      this.processing = false;
      if(this.enabledComments.indexOf(id) < 0) this.expand(id);
    });
  }

  expand(id){
    this.enabledComments.push(id);
  }

  collapse(id){
    const index = this.enabledComments.indexOf(id);
    this.enabledComments.splice(index, 1);
  }
  
  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    });
    this.getAllNews();
  }

}
