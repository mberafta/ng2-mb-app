import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { User } from '../shared/models/user';

@Injectable()
export class UserSearchService{

    private params: URLSearchParams = new URLSearchParams();
    private headers: Headers = new Headers({'Content-Type':'application/json'});
    private url = '/api/users';

    constructor(private http: Http){
        console.log('Service searchUser opérationnel');
    }

    /** méthode perméttant de faire une requête avec un paramètre string */
    search(term: string): Observable<User[]>{
        this.params.set('name', term);
        let requestOptions = new RequestOptions({
            search:this.params, 
            headers: this.headers
        });

        return this.http.get(this.url, requestOptions)
            .map(
                 response => response.json()
                );
    }
}

