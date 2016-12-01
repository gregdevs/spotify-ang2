import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ArtistHeadComponent }  from './artist-head/artist-head.component';
import { HttpModule } from '@angular/http';
import { ArtistService } from './artist.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ArtistHeadComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ArtistService ]
})
export class AppModule { }
