import { Component, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { AlbumsService } from './albums.service';
import { IAlbum } from 'src/models/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[];
  faTrashIcon = faTrash;

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

  handleDeleteAlbum(album: IAlbum): void {
    this.albumsService.deleteAlbum(album.id).subscribe(
      (response) => {
        const index = this.albums.indexOf(album);
        if (index !== -1) {
          this.albums.splice(index, 1);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
