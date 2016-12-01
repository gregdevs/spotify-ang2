import {Component} from '@angular/core';
import { ArtistService } from '/app/artist.service';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'artist-head',
	templateUrl: '../app/artist-head/artist-head.component.html'
})

export class ArtistHeadComponent{
     artist: Artist[];
     mode = 'Observable';	



getArtist(){
	  this.artistService.getArtist()
	                     .subscribe(
                          artist => this.artist,
                          error => this.errorMessage);
	                     ) 
}
}


