import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './naruto-home.component.html',
  styleUrls: ['./naruto-home.component.scss'],
})
export class NarutoHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('inicio');
  }
}
