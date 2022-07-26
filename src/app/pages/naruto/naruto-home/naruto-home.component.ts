import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './naruto-home.component.html',
  styleUrls: ['./naruto-home.component.scss'],
})
export class NarutoHomeComponent implements OnInit {
  constructor() {}
  Naruto = [
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Sakura Haruno',
      photoName: 'sakura-haruno',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Sasuke Uchiha',
      photoName: 'sasuke-uchiha',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Sem pais e sozinho naruto é o melhor ninja',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
    },
  ];
  ngOnInit(): void {
    console.log('inicio');
  }
}
