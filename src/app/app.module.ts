import { NarutoHomeModule } from './pages/naruto/naruto-home/naruto-home.module';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRoutingModule } from './pages/home/home-routing.module';

import { NarutoHomeRoutingModule } from './pages/naruto/naruto-home/naruto-home-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    HomeModule,
    NarutoHomeRoutingModule,
    NarutoHomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
