import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
