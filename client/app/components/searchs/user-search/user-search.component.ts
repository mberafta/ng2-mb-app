import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// models
import { User } from '../../../shared/models/user';

// services
import { UserSearchService } from '../../../services/user-search.service';

// rxjs observable extension
import 'rxjs/add/observable/of';

// operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id.replace('/dist', '/app'),
    selector: 'user-search',
    templateUrl: './user-search.component.html',
    providers: [UserSearchService]
})

export class UserSearchComponent implements OnInit {
    users: Observable<User[]>;
    private searchTerms = new Subject<string>();

    constructor(private userSearchService: UserSearchService) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void{
        this.users = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(
                term => term ? this.userSearchService.search(term) : Observable.of<User[]>([])
                )
            .catch(error => {
                console.log(error);
                return Observable.of<User[]>([])
        });
    }
}