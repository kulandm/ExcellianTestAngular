import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	menus: Array<Object> = [];

  constructor() { }

  ngOnInit() {
  	this.menus = [
	  	{
	  		name: 'All Users',
	  		icon: 'user-circle',
	  		href: '/1234'
	  	},
	  	{
	  		name: 'Favourite',
	  		icon: 'star',
	  		href: '/1234'
	  	},
	  	{
	  		name: 'Administartors',
	  		icon: 'gear',
	  		href: '/1234'
	  	},
	  	{
	  		name: 'Non-Admins',
	  		icon: 'users',
	  		href: '/1234'
	  	},
	  	{
	  		name: 'Archived',
	  		icon: 'archive',
	  		href: '/1234'
	  	}
  	]
  }

}
