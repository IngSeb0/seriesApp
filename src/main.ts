import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SeriesModule } from './app/series/series.module';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule, SeriesModule)],
}).catch((err) => console.error(err));
