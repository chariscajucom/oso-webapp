import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class OSOFormsService {
    domain = "http://localhost:8080/";
    constructor(
        private http: Http
        ) {}
     
    getallEBForms(){
        return this.http.get(this.domain + 'osoforms/allEBForms').map(res => res.json());
    }

    getallRenewalForms(){
        return this.http.get(this.domain + 'osoforms/allRenewalForms').map(res => res.json());
    }

    getallRERForms(){
        return this.http.get(this.domain + 'osoforms/allRERForms').map(res => res.json());
    }

    getallSampleLettersForms(){
        return this.http.get(this.domain + 'osoforms/allSampleLettersForms').map(res => res.json());
    }

    getallOUForms(){
        return this.http.get(this.domain + 'osoforms/allOUForms').map(res => res.json());
    }
    getallSCForms(){
        return this.http.get(this.domain + 'osoforms/allSCForms').map(res => res.json());
    }
    getallWUForms(){
        return this.http.get(this.domain + 'osoforms/allWUForms').map(res => res.json());
    }


}