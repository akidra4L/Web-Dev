import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { IAlbum } from 'src/models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
