import { Component, OnInit } from '@angular/core';

import { ISidebar } from 'src/models/sidebar-items';

const sidebarItems: ISidebar[] = [
  { name: 'Home', link: '/home' },
  { name: 'Albums', link: '/albums' },
  { name: 'About', link: '/about' }
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarItems: ISidebar[];

  constructor() {
    this.sidebarItems = [];
  }

  ngOnInit(): void {
    this.sidebarItems = sidebarItems;
  }
}
