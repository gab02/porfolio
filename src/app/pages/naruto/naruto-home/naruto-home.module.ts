import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NarutoHomeRoutingModule } from './naruto-home-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  NarutoHomeComponent,
  DialogElementsExampleDialog,
} from './naruto-home.component';

@NgModule({
  declarations: [NarutoHomeComponent, DialogElementsExampleDialog],
  imports: [
    CommonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    NarutoHomeRoutingModule,
  ],
})
export class NarutoHomeModule {}
