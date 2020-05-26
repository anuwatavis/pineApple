import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  items = [
    { item: 'Mac' },
    { item: 'iPad' },
    { item: 'iPhone' },
    { item: 'Watch' },
    { item: 'TV' },
    { item: 'Music' },
    { item: 'Support' },
  ];

  ngOnInit(): void {}
}
