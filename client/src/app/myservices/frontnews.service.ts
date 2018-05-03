import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FrontNewsService {
    domain = "";
    constructor(
        private http: Http
        ) {}
    
    getAllFrontNews(){
        return this.http.get(this.domain + 'frontnews/allFrontNews').map(res => res.json());
    }
        
}