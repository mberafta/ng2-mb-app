import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable()
export class AccountService{

    private readonly url = "/api/authenticate";
    private readonly headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){

    }

    public login(user:User){
        return this.http.post(this.url, user)
            .map(
                response => response.json()
                );
    }

}