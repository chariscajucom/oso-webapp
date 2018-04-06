import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../myservices/auth.service';
import { NewsService } from '../../myservices/news.service';

@Component({
  selector: 'admin-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  message;
  messageClass;
  newPost = false;
  loadingNews = false;
  form: FormGroup;
  processing = false;
  username;
  newsArticles;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private newsService: NewsService
  )
  {
    this.createNewsPost();
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

  draftComment(){

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

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    });
    this.getAllNews();
  }

}