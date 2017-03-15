import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../shared/models/user';

@Injectable()
export class UserService{

    private url = "http://localhost:3000/api/users";
    private headers = new Headers({ 'Content-Type':'application/json'});

    constructor(private http:Http){
        console.log('Service user opérationnel');
    }

    getUsers(){
        return this.http.get('http://localhost:3000/api/users')
        .map(response => response.json());
    }

    addUser(user:User): Promise<User>{
        return this.http.post(this.url, JSON.stringify(user), { headers: this.headers})
        .toPromise()
        .then(() => user)
        .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
        console.error('Une érreur est survenue', error);
        return Promise.reject(error.message || error);
    }
}
