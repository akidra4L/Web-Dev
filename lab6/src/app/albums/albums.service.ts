import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';

import { IAlbum } from 'src/models/albums';
import { IPhotos } from 'src/models/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<IAlbum> {
    return this.http.get<IAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  addAlbum(body: any): Observable<IAlbum> {
    return this.http.post<IAlbum>(`https://jsonplaceholder.typicode.com/albums`, body);
  }

  deleteAlbum(id: number): Observable<IAlbum> {
    return this.http.delete<IAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle })
      .pipe(catchError((error) => throwError(error)));
  }

  getPhotos(id: number): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
