import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id.replace('/dist', '/app'),
    selector: 'users',
    templateUrl: './user.component.html',
    styles: [`
        .user-list{
            cursor:pointer;
        }
        .user-list:hover{
            background:rgba(31,31,31,0.2);
            transition:0.8s;
        }
        `
    ],
    providers: [UserService]
})

export class UserComponent {
    users: User[];
    newUser: User = new User();
    form: FormGroup;

    constructor(private userService: UserService, public formBuilder: FormBuilder) {
        this.userService.getUsers()
            .subscribe(data => this.users = data);

        this.form = formBuilder.group({
            'name': [null, Validators.required],
            'password': [null, Validators.required]
        })
    }

    addUser(value: any): void {
        {
            if(value.name && value.password){
                this.newUser.name = value.name;
                this.newUser.password = value.password;

                this.userService.addUser(this.newUser)
                .then(user => {
                    this.users.push(user);
                });

            };
        }
    }
}