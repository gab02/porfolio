import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.items = [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
        },
        {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io',
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload',
        },
      ];
  }
  redirectTo(data) {
    this.router.navigate([data]);
  }
}
