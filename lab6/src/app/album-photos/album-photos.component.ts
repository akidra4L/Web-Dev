import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from 'src/models/albums';
import { IPhotos } from 'src/models/photos';
import { AlbumsService } from '../albums/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {

  album: IAlbum;
  photos: IPhotos[];

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as IAlbum;
    this.photos = [{}] as IPhotos[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let _id = params.get('id');
        if (_id) {
          let id = +_id;
          this.albumService.getAlbum(id).subscribe(
            (response) => {
              this.album = response;
            },
            (error) => {
              console.log(error);
            }
          );
          this.albumService.getPhotos(id).subscribe(
            (response) => {
              this.photos = response.slice(0, 3);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    );
  }

  back() {
    window.location.href = `http://localhost:4200/albums/${this.album.id}`;
  }
}
