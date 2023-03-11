import { Component, OnInit } from '@angular/core';

import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';

import { AlbumsService } from './albums.service';
import { IAlbum } from 'src/models/albums';

import { interval, take , map} from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[];
  newAlbumTitle: string;
  faTrashIcon = faTrash;
  faAddIcon = faAdd;

  numbers = interval(100);
  takeThree = this.numbers.pipe(take(10));

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbumTitle = "";
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().pipe(
      map( x=> x.slice(0,10))
    ).subscribe((response) => {
        this.albums = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.takeThree.subscribe(value => console.log("Value: ", value));
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

  handleAddNewAlbum(): void {
    if (this.newAlbumTitle === "") {
      return;
    }
    
    this.albumsService.addAlbum({ userId: this.albums.length + 1, id: this.albums.length + 1, title: this.newAlbumTitle }).subscribe(
      (response) => {
        this.albums.push(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
