import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
