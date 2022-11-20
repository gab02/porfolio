import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NarutoHomeRoutingModule } from './naruto-home-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  NarutoHomeComponent,
  DialogElementsExampleDialog,
} from './naruto-home.component';
import { BattleComponent } from './components/battle/battle.component';

@NgModule({
  declarations: [
    NarutoHomeComponent,
    DialogElementsExampleDialog,
    BattleComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    NarutoHomeRoutingModule,
  ],
})
export class NarutoHomeModule {}
