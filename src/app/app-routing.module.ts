import { NarutoHomeModule } from './pages/naruto/naruto-home/naruto-home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgwWowModule } from 'ngx-wow';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'naruto',
    loadChildren: () =>
      import('./pages/naruto/naruto-home/naruto-home.module').then(
        (m) => m.NarutoHomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
