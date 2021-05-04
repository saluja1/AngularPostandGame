import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';

import { GameModule } from './game/game.module';
import { RegisterComponent } from './register/register.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { map } from "rxjs/operators";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({
          timeOut: 2000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
    }),
	FontAwesomeModule,
  FormsModule,
  ReactiveFormsModule, 
 AppRoutingModule,
 HttpModule,
 HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
