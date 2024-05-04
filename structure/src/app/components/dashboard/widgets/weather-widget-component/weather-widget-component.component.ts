import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget-component',
  templateUrl: './weather-widget-component.component.html',
  styleUrl: './weather-widget-component.component.css'
})
export class WeatherWidgetComponentComponent {
  @Input() weather: string;
}
