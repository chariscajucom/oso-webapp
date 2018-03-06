import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { AuthService } from '../../myservices/auth.service';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'dash-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  username;
  menuItems: any[];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogoutClick(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    });
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
