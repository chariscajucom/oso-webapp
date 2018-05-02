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

    getAllHagonoyOrgs(){
        return this.http.get(this.domain + 'studorgs/allHagonoyOrgs').map(res => res.json());
    }

    getAllMenesesOrgs(){
        return this.http.get(this.domain + 'studorgs/allMenesesOrgs').map(res => res.json());
    }

    getAllSarmientoOrgs(){
        return this.http.get(this.domain + 'studorgs/allSarmientoOrgs').map(res => res.json());
    }

    getAllCAFAOrgs(){
        return this.http.get(this.domain + 'studorgs/allCAFAOrgs').map(res=>res.json());
    }

    getAllCALOrgs(){
        return this.http.get(this.domain + 'studorgs/allCALOrgs').map(res=>res.json());
    }
    
    getAllCBAOrgs(){
        return this.http.get(this.domain + 'studorgs/allCBAOrgs').map(res=>res.json());
    }

    getAllCCJEOrgs(){
        return this.http.get(this.domain + 'studorgs/allCCJEOrgs').map(res=>res.json());
    }

    getAllCOEDOrgs(){
        return this.http.get(this.domain + 'studorgs/allCOEDOrgs').map(res=>res.json());
    }

    getAllCOEOrgs(){
        return this.http.get(this.domain + 'studorgs/allCOEOrgs').map(res=>res.json());
    }

    getAllCHEOrgs(){
        return this.http.get(this.domain + 'studorgs/allCHEOrgs').map(res=>res.json());
    }

    getAllCITOrgs(){
        return this.http.get(this.domain + 'studorgs/allCITOrgs').map(res=>res.json());
    }

    getAllCICTOrgs(){
        return this.http.get(this.domain + 'studorgs/allCICTOrgs').map(res=>res.json());
    }

    getAllCONOrgs(){
        return this.http.get(this.domain + 'studorgs/allCONOrgs').map(res=>res.json());
    }

    getAllCOPERSOrgs(){
        return this.http.get(this.domain + 'studorgs/allCOPERSOrgs').map(res=>res.json());
    }

    getAllCSOrgs(){
        return this.http.get(this.domain + 'studorgs/allCSOrgs').map(res=>res.json());
    }

    getAllCSSPOrgs(){
        return this.http.get(this.domain + 'studorgs/allCSSPOrgs').map(res=>res.json());
    }
    getAllOrgs(){
        return this.http.get(this.domain + 'studorgs/allOrgs').map(res=>res.json());
    }

}