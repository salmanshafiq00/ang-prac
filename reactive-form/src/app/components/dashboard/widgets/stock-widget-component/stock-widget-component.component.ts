import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-stock-widget-component',
  templateUrl: './stock-widget-component.component.html',
  styleUrl: './stock-widget-component.component.css'
})
export class StockWidgetComponentComponent {
@Input() stock: string;
}
