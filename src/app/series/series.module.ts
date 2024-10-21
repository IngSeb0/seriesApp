import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';  // Importa el componente

@NgModule({
  declarations: [SeriesListComponent],  // Declara el componente
  imports: [CommonModule],  // Importa módulos comunes de Angular
  exports: [SeriesListComponent],  // Exporta el componente para ser usado en otros módulos
})
export class SeriesModule {}
