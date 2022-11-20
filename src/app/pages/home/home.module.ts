import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DockModule } from 'primeng/dock';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
        import { FieldsetModule } from 'primeng/fieldset';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CardModule,
    FieldsetModule,
    MatCardModule,
    ImageModule,
    DividerModule,
    MatListModule,
    CommonModule,
    FormsModule,
    SplitButtonModule,
    DockModule,
    ButtonModule,
    MatButtonModule,
    ToolbarModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
