import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions} from "@angular/http";
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class StudLeaderFormsService {
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

     
    getallEBForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allEBForms').map(res => res.json());
    }

    getallRenewalForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allRenewalForms').map(res => res.json());
    }

    getallRERForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allRERForms').map(res => res.json());
    }

    getallSampleLettersForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allSampleLettersForms').map(res => res.json());
    }

    getallOUForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allOUForms').map(res => res.json());
    }
    getallSCForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allSCForms').map(res => res.json());
    }
    getallWUForms(){
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'osoforms/allWUForms').map(res => res.json());
    }


}