import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

// google maps
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

// Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user.component';
import { UserSearchComponent } from './components/searchs/user-search/user-search.component';
import { PlaceSearchComponent } from './components/searchs/place-search/place-search.component';
import { AccountManagerComponent } from './components/account/account-manager.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';

// Routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCVKSrUVHMRYiWk98zpsCrNlKJYR7yXnts",
            libraries: ['places']
        }),
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        UserSearchComponent,
        PlaceSearchComponent,
        AccountManagerComponent,
        CurrentUserComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }