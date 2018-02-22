import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar.routing';

declare var $: any;

@Component({
	moduleId: module.id,
  	selector: 'app-navbar',
  	templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
	public menuItems: any[];

  ngOnInit() {
  	this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
