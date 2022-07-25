import { NarutoHomeComponent } from './naruto-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const NarutoHomeRoutes: Routes = [
  {
    path: 'naruto-home',
    component: NarutoHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(NarutoHomeRoutes)],
  exports: [RouterModule],
})
export class NarutoHomeRoutingModule {}
