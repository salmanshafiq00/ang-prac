import { Component, Renderer2, inject } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  renderer: Renderer2 = inject(Renderer2);
  modalTitle: string = '';

  onConfirmation: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showConfirmation(title: string, content: string) {
    this.modalTitle = title || '';

    const modalBody = document.getElementById('modal-body');

    modalBody.append('');

    if (modalBody) {
      modalBody.innerHTML = '';
      const modalBodyContent = this.renderer.createText(`${content}`);
      this.renderer.appendChild(modalBody, modalBodyContent);
    }

    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
  }

  OnConfirmationBtnClicked(value: boolean) {
    this.onConfirmation.next(value);
    this.closeConfirmation();
  }

  closeConfirmation() {
    const confirmationModalElement = document.getElementById('confirmationModal');
    if (confirmationModalElement) {
      const confirmationModal = bootstrap.Modal.getInstance(confirmationModalElement);
      if (confirmationModal) {
        confirmationModal.hide();
      }
    }
  }
}
