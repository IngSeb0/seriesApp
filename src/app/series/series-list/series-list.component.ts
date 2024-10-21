import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../series.model';

@Component({
  selector: 'app-series-list',  // Asegúrate de que el selector sea correcto
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }
}
