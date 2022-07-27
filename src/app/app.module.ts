import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import localGt from '@angular/common/locales/es-GT';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localGt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-GT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
