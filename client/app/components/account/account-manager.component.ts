import {
    Component,
    OnChanges,
    trigger,
    state,
    animate,
    style,
    transition,
    Input,
    OnInit
} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../shared/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id.replace('/dist', '/app'),
    selector: 'authenticate',
    templateUrl: './account-manager.component.html',
    providers: [AccountService],
    animations: [
        trigger('visibilityChanged', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0 })),
            transition('0 => 1', animate('500ms')),
            transition('1 => 0', animate('500ms'))
        ])
    ]
})

export class AccountManagerComponent implements OnChanges {
    formUser: User = new User();
    formGroup: FormGroup;
    returnUrl: string;

    @Input() visible: boolean = false;
    visibility: boolean = false;

    constructor(private formBuilder: FormBuilder, private accountService: AccountService, private route:ActivatedRoute, private router: Router)  {
        this.formGroup = formBuilder.group({
            'name': [null, Validators.required],
            'password': [null, Validators.required]
        });
    }

    ngOnInit(){
        localStorage.setItem('currentUser', null);
        // this.returnUrl = ('/');
    }

    ngOnChanges() {
        this.visibility = this.visible ? true : false;
        this.fadeOut(this.visible);
    }

    public login(form) {
        if (form.name && form.password) {
            this.formUser.name = form.name;
            this.formUser.password = form.password;

            this.accountService.login(this.formUser)
                .subscribe(
                (data) => {
                    if (data.token) {
                        localStorage.setItem('currentUser', JSON.stringify(data));
                        // this.router.navigateByUrl(this.returnUrl);
                        //influer sur l'animation
                        this.visible = true;
                        location.reload();
                    }
                }
                );

            this.formGroup.reset();
        }
    }

    private fadeOut(value: boolean) {
        setTimeout(function () {
            value = false;
        }, 1000);
    }

    public isUserNull():boolean{
        var result = localStorage.getItem('currentUser') ? false : true;
        return result;
    }

}