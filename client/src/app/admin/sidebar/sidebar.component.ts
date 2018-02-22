import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon:'design_app', class: 'active'},
    { path: 'news', title: 'News',  icon:'education_paper', class: '' },
    { path: 'announcement', title: 'Announcement',  icon:'ui-2_chat-round', class: '' },
    { path: 'Activities', title: 'Activities',  icon:'files_single-copy-04', class: '' },
    { path: 'pdf-form', title: 'PDF Forms',  icon:'files_paper', class: '' },
];

@Component({
  selector: 'dash-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

