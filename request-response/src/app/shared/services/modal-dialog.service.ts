import { Injectable, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../components/custom-modal/custom-modal.component';
import { TaskCreateOrEditComponent } from '../../components/task-create-or-edit/task-create-or-edit.component';

@Injectable()
export class ModalDialogService {

  modalService: NgbModal = inject(NgbModal);

  openModal(title: string, componentRef: any){
    const modalRef = this.modalService.open(componentRef);
    // modalRef.componentInstance.title = title;
    // modalRef.componentInstance.data = data;

  }
}
