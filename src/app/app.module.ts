import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app (Idioma)
import  localEs  from '@angular/common/locales/es-AR';
import { registerLocaleData } from  '@angular/common'
registerLocaleData( localEs );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,

    SharedModule,
    VentasModule

  ],
  providers: [ 
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
