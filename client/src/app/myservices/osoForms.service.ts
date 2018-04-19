import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class OSOFormsService {
    domain = "http://localhost:8080/";
    constructor(
        private http: Http
        ) {}
    getAllForms(){
        return this.http.get(this.domain + 'osoForms/allForms').map(res => res.json());
    }   
}