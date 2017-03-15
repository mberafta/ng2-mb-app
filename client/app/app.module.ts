import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user.component';

@NgModule({
    imports : [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
    declarations : [ AppComponent, UserComponent ],
    bootstrap : [ AppComponent ]
})

export class AppModule { }