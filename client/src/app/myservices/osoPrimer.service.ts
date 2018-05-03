import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OsoPrimerService {
    domain = "";
    constructor(
        private http: Http
        ) {}
    
        getAllcontent(){
        return this.http.get(this.domain + 'osoprimer/getAllcontent').map(res => res.json());
    }
}