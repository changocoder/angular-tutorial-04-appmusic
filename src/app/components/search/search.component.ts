import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  artists: any[] = [];

  constructor( private spotifyService: SpotifyService ) { }

  searchArtist(termino: string): void{
    this.spotifyService.searchArtist(termino)
        .subscribe( (data: any) => {
          console.log(data);
          this.artists = data;
        });

  }

}
