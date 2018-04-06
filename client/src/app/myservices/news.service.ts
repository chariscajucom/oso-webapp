import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class NewsService {
  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  createAuthenticationHeaders(){
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  createNews(news){
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'news/createNews', news, this.options).map(res => res.json());
  }

  getAllNews(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'news/allNews', this.options).map(res => res.json());
  }

  getSingleNews(id){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'news/singleNews/' + id, this.options).map(res => res.json());
  }

  editNews(news){
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + 'news/updateNews', news, this.options).map(res => res.json());
  } 

  deleteNews(id){
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + 'news/deleteNews/'+ id, this.options).map(res => res.json());
  }


}