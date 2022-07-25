import { NarutoHomeRoutingModule } from './naruto-home-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NarutoHomeComponent } from './naruto-home.component';

@NgModule({
  declarations: [NarutoHomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    NarutoHomeRoutingModule,
  ],
})
export class NarutoHomeModule {}
