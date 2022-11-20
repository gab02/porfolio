import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent implements OnInit {
  isOver = false;
  public openMenu: boolean = false;

  @Input() firstHeroe;
  @Input() secondHeroe;

  constructor() {}

  ngOnInit(): void {}
}
