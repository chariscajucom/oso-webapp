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

    getAllFratOrgs(){
        return this.http.get(this.domain + 'studorgs/allFratOrgs').map(res => res.json());
    }

    getAllEnvOrgs(){
        return this.http.get(this.domain + 'studorgs/allEnvOrgs').map(res => res.json());
    }

    getAllLifeOrgs(){
        return this.http.get(this.domain + 'studorgs/allLifeOrgs').map(res => res.json());
    }

    getAllPoliOrgs(){
        return this.http.get(this.domain + 'studorgs/allPoliOrgs').map(res => res.json());
    }

    getAllSocioOrgs(){
        return this.http.get(this.domain + 'studorgs/allSocioOrgs').map(res => res.json());
    }

    getAllSpiritOrgs(){
        return this.http.get(this.domain + 'studorgs/allSpiritOrgs').map(res => res.json());
    }

    getAllBustosOrgs(){
        return this.http.get(this.domain + 'studorgs/allBustosOrgs').map(res => res.json());
    }
        
}