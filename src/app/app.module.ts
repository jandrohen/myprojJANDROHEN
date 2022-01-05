import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    ColoresComponent,
    FirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
