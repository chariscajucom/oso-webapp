import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class contactusService{
    
domain = "";
constructor(
    private http:Http
){}

    sendContactForm(formMessage){
        return this.http.post(this.domain + 'emailwebsite/sendMessage',formMessage).map(res =>res.json());
    }
}