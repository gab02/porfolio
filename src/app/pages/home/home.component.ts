import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dockBasicItems: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.dockBasicItems = [
      {
        label: 'Instagram',
        icon: '../../../../assets/images/instagram.png',
      },
      {
        label: 'Linkedin',
        icon: '../../../../assets/images/linkedin.png',
      },
      {
        label: 'Github',
        icon: '../../../../assets/images/git.png',
      },
    ];
  }
}
