import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: 'artist.component.html'
})

export class ArtistComponent {

  artist: any = {};
  loadingArtist = true;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtist( params['id'] );
    });

  }

  getArtist( id: string ): void{
    this.loadingArtist = true;
    this.spotifyService.getArtist(id)
              .subscribe( data => {
                  this.artist = data;
                  console.log(this.artist);
                  this.loadingArtist = false;
              });
  }

}
