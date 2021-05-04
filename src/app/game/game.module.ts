import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GameComponent } from './game.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	FontAwesomeModule,
	BrowserAnimationsModule

    ]
})
export class GameModule { }
