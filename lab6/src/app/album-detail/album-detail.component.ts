import { Component, OnInit } from '@angular/core';

import { IAlbum } from 'src/models/albums';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album: IAlbum;

  constructor() {
    this.album = {} as IAlbum;
  }

  back() {
    window.location.href = "http://localhost:4200/albums";
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
