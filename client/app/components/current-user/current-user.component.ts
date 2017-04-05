import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
    selector:'current-user',
    template:`
    <p class="text-primary">{{currentUser.name}}</p>
    `
})

export class CurrentUserComponent{
   @Input() currentUser:User = new User();
}