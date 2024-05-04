import { ComponentRef, Injectable, ViewContainerRef, inject } from '@angular/core';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  componentRef: ComponentRef<ConfirmationComponent>;

  showConfirmation(title: string, content: any): Observable<boolean> {
    this.componentRef = this.viewContainerRef.createComponent(ConfirmationComponent);
    this.componentRef.instance.showConfirmation(title, content);
    return this.componentRef.instance.onConfirmation;
  }

  closeConfirmation() {
    this.componentRef.instance.closeConfirmation();
  }
}
