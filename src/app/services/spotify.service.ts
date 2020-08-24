import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    this.getNewReleases();
  }

  getNewReleases(): Observable<any>  {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAItFmIsTnKbNykaGTfSjj2_H_TEwzAvRZuJy0CgtLhF7vn2Z2v_ACxGT2EfabQLNqEDcVxoJaK8UkYmoI'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
