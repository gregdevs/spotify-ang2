import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ArtistHeadComponent }  from './artist-head/artist-head.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ArtistHeadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
