import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {
    domain = "";
    constructor(
        private http: Http
        ) {}
        
validation(student) { 
    return this.http.post(this.domain + 'studvalidation/studentvalid', student).map(res => res.json());
    }  

}