import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { WeatherWidgetComponentComponent } from './widgets/weather-widget-component/weather-widget-component.component';
import { NewsWidgetComponentComponent } from './widgets/news-widget-component/news-widget-component.component';
import { StockWidgetComponentComponent } from './widgets/stock-widget-component/stock-widget-component.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private viewContainerRef: ViewContainerRef) {

  }

  addWidget(widgetType: string) {
    // Get the component type based on the widgetType
    const widgetComponent = this.getComponentType(widgetType);
    
    // Create a component instance and attach it to the view container
    const componentRef = this.viewContainerRef.createComponent(widgetComponent);
  
    // Customize the widget based on its type
    if (widgetType === 'weather') {
      componentRef.instance.weather = 'Hot';
    }
    if (widgetType === 'news') {
      componentRef.instance.news = 'Propagonda';
    }
    if (widgetType === 'stock') {
      componentRef.instance.stock = 'Dorbesh';
    }
  }
  

  getComponentType(type: string): Type<any> {
    switch (type) {
      case 'weather':
        return WeatherWidgetComponentComponent;
      case 'news':
        return NewsWidgetComponentComponent;
      case 'stock':
        return StockWidgetComponentComponent;
      default:
        return WeatherWidgetComponentComponent
    }
  }
}
