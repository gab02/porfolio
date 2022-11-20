import { LoaderService } from './../../../shared/components/loader.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
export interface DialogData {
  photoName: string;
  name: string;
}
@Component({
  templateUrl: './naruto-home.component.html',
  styleUrls: ['./naruto-home.component.scss'],
})
export class NarutoHomeComponent implements OnInit {
  isOver = false;
  public openMenu: boolean = false;

  Naruto = [
    {
      name: 'Naruto Uzumaki',
      photoName: 'naruto-uzumaki',
      text: 'Naruto ao nascimento teve a Kurama (besta de 9 caudas) selada em si. Todos viraram as costas para naruto pois naruto era considerado um portador de um demônio',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
    {
      name: 'Sakura Haruno',
      photoName: 'sakura-haruno',
      text: 'Sakura sem importância nenhuma, casou com sasuke (sasuke quase matou ela)',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
    {
      name: 'Sasuke Uchiha',
      photoName: 'sasuke-uchiha',
      text: 'Após seu irmão (Itachi uchiha) matar todos os seus familiares, sasuke decidiu focar sua vida em matar Itachi uchiha',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },

    {
      name: 'Kakashi Hatake',
      photoName: 'kakashi-hatake',
      text: 'Kakashi sendo considerado um gênio, aos 6 anos de idade já era um assassino da anbu, teve seu pai morto por suícidio quando jovem',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
    {
      name: 'Hinata Hyuga',
      photoName: 'hinata-hyuga',
      text: 'Considerada a princesa do byakugan, Hinata com seu ótimo jôgan, consegue enxergar por mais de 20Km',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
    {
      name: 'Rock Lee',
      photoName: 'rock-lee',
      text: 'O esforço vence o don natural, Rock lee mudou a vida de todos os brasileiros, provando que mesmo bebado consegue ser 5x mais foda',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
    {
      name: 'Itachi Uchiha',
      photoName: 'itachi-uchiha',
      text: 'Herói da vila nas sombras, itachi ao pedido do 3° hokage, assassinou todos os membros de sua familia, após os memsmos se voltarem contra a vila, com um único pedido, itachi pediu para deixar seu irmão vivo, pois era quem mais amava.',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
    {
      name: 'Kisame',
      photoName: 'kisame',
      text: 'Considerado a besta sem cauda, kisame morreu protegendo o segredo da akatsuki',
      estilos: [{ estilo: 'ar' }, { estilo: 'agua' }],
      pow: '1500',
      def: '100',
    },
  ];
  firstHeroe: '';
  secondHeroe: '';
  constructor(public loaderService: LoaderService, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('inicio');
  }
  showAlert() {
    this.loaderService.loadingControl.next('valor');
  }

  openDialog() {
    const name = 'naruto-uzumaki';
    const name1 = 'Naruto Uzumaki';
    this.dialog.open(DialogElementsExampleDialog, {
      data: { photoName: name, name: name1 },
    });
  }
  selectHeroe(image) {
    //case firstHeroes dont preenchited
    if (this.firstHeroe === undefined) {
      this.firstHeroe = image;
      return;
    } else {
      this.secondHeroe = image;
    }
    console.log(this.secondHeroe);
    console.log(this.firstHeroe);
  }
}

@Component({
  selector: 'winner-dialog',
  templateUrl: '../winner-dialog.component.html',
})
export class DialogElementsExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
