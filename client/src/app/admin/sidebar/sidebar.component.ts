import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { AuthService } from '../../myservices/auth.service';

declare const $: any;

@Component({
  selector: 'dash-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  user;
  menuItems: any[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.user = data.user;
    })
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
