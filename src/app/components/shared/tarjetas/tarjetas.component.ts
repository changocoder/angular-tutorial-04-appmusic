import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {
  @Input() newReleases: any[] = [];

  constructor( private router: Router) { }

  showArtist(item: any ): void {

     let artistId;

     if ( item.type === 'artist' ){
       artistId = item.id;
     } else{
       artistId = item.artists[0].id;
     }
     console.log(artistId);
     this.router.navigate(['/artist', artistId]);
  }

}
