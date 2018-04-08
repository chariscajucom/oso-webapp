import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class StudOrgsService {
    domain = "http://localhost:8080/";
    constructor(
        private http: Http
        ) {}
    
    getAllAcadOrgs(){
        return this.http.get(this.domain + 'studorgs/allAcadOrgs').map(res => res.json());
    }
        
}