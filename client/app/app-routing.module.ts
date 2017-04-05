import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/users/user.component';
import { UserSearchComponent } from './components/searchs/user-search/user-search.component';
import { PlaceSearchComponent } from './components/searchs/place-search/place-search.component';
import { AccountManagerComponent } from './components/account/account-manager.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'searchUsers',
        component: UserSearchComponent,
    },
    {
        path:'searchPlaces',
        component:PlaceSearchComponent
    },
    {
        path:'authenticate',
        component:AccountManagerComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }