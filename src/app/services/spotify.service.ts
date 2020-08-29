import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient ) {
    this.getNewReleases();
  }

  getQuery( query: string ): Observable<any>{

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC7cRG-3hWNFNcpF4K8b0p3LVEnjPekWuYId7FWoAb_wbm07qMLjbiw-ppWXIA07h7le0vsv2HtrCo5uP8'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {

    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
  }

  searchArtist(query: string): Observable<any> {

    return this.getQuery(`search?q=${ query }&type=artist&limit=15`)
          .pipe( map( data => data['artists'].items ));
  }
}
