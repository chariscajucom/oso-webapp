import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../myservices/auth.service';
import { NewsService } from '../../myservices/news.service';

@Component({
  selector: 'admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  message;
  messageClass;
  newPost = false;
  loadingNews = false;
  form;
  commentForm;
  processing = false;
  username;
  newsArticles;
  newComment = [];
  enabledComments = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private newsService: NewsService
  )
  {
    this.createNewsPost();
    this.createCommentForm();
  }

  createNewsPost(){
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        this.alphaNumericValidator
      ])],
      body: ['', Validators.compose([
						Validators.required,
						Validators.minLength(15),
						Validators.maxLength(500)
				])]
    })
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

  enableFormNewsForm(){
    this.form.get('title').enable();
    this.form.get('body').enable();
  }

  disableFormNewsForm(){
    this.form.get('title').disable();
    this.form.get('body').disable();
  }

  alphaNumericValidator(controls){
    const regExp = new RegExp(/^[a-zA-Z0-9 ]*$/);
    if(regExp.test(controls.value)){
			return null;
		} else {
			return { 'alphaNumericValidator': true }
		}
	}

  createNewsForm(){
    this.newPost = true;
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

  onNewsSubmit(){
    // console.log('form submitted');
    this.processing = true;
    this.disableFormNewsForm();

    const news = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username
    }

    this.newsService.createNews(news).subscribe(data=>{
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableFormNewsForm();
      } else{
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.getAllNews();
        setTimeout(() => {
          this.newPost = false;
          this.processing = false;
          this.message = false;
          this.form.reset();
          this.enableFormNewsForm();
        }, 2000);
      }
    });
  }

  goBack(){
    window.location.reload();
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