import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';  // Importa SeriesModule

@NgModule({
  declarations: [AppComponent],  // Declara AppComponent
  imports: [
    BrowserModule,
    HttpClientModule,  // Importa HttpClientModule para las peticiones HTTP
    SeriesModule,  // Importa el módulo de series
  ],
  providers: [],
  bootstrap: [AppComponent],  // Arranca la aplicación con AppComponent
})
export class AppModule {}
