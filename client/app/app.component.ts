import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from './shared/models/user';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.replace('/dist', '/app'),
    selector: 'my-app',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs:['currentUser']
})

export class AppComponent {

    currentUser: User = new User();
    constructor(private route: Router) {
        
    }

    ngOnInit() {
        var storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            if (storedUser.token) {
                this.currentUser = storedUser;
            }
        }
        else {
            this.route.navigateByUrl('/authenticate');
        }
    }

    

    public getUser() {
        if (this.currentUser)
            return this.currentUser;
        else
            return null;
    }

    public userLogged() {
        var result = false;
        var user = this.getUser();
        if (user != null) {
            if (user.token != "")
                result = true;
        }
        return result;
    }

}