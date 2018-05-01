import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OsoPrimerService {
    domain = "http://localhost:8080/";
    constructor(
        private http: Http
        ) {}
    
        getAllcontent(){
        return this.http.get(this.domain + 'osoprimer/getAllcontent').map(res => res.json());
    }
}