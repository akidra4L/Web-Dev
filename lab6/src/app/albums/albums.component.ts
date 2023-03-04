import { Component, OnInit } from '@angular/core';

import { AlbumsService } from './albums.service';
import { IAlbum } from 'src/models/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[];

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(
      (response) => {
        this.albums = response.slice(0, 10);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
