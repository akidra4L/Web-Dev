import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { IAlbum } from 'src/models/albums';
import { AlbumsService } from '../albums/albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album: IAlbum;
  newTitle: string;
  faCheckIcon = faCheck; 

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as IAlbum;
    this.newTitle = "";
  }

  back() {
    window.location.href = "http://localhost:4200/albums";
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
            }
          )
        }
      }
    );
  }

  saveTitle() {
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      (response) => {
        this.album.title = response.title;
        this.newTitle = "";
      }
    )
  }
}
