import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {Http, HttpModule} from '@angular/http';
import {DataService} from './service/data.service';




@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        BrowserModule,
      FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
