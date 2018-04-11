import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class PdfFormsService{
    domain = "http://localhost:8080/";
    constructor(
        private http: HttpClient
        ) {}

    pdfDownload(file:String){
        const body = {filename:file};
        return this.http.post('http://localhost:8080/pdfforms/pdfDownload', body, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}