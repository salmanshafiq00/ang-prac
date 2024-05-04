import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-widget-component',
  templateUrl: './news-widget-component.component.html',
  styleUrl: './news-widget-component.component.css'
})
export class NewsWidgetComponentComponent {
  @Input() news: string;
}
