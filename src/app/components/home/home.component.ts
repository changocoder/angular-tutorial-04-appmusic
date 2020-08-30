import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  newReleases: any[] = [];
  loading = true;

  constructor(private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data);
          this.newReleases = data;
          this.loading = false;

        });

  }


}
