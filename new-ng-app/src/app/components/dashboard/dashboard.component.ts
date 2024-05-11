import { Component, OnInit, inject } from '@angular/core';
import { ModalDialogService } from '../../shared/services/modal-dialog.service';
import { TaskCreateOrEditComponent } from '../task-create-or-edit/task-create-or-edit.component';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [ModalDialogService]
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];
  modalService: ModalDialogService = inject(ModalDialogService);
  ngbModalService: NgbModal = inject(NgbModal)

  closeResult = '';

  http: HttpClient = inject(HttpClient);

  OpenCreateTaskForm(id?: any) {

    if (id) {

    }

    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Prevent closing on backdrop click
      backdropClass: 'light-blue-backdrop',
    };

    const modalRef = this.ngbModalService.open(TaskCreateOrEditComponent, modalOptions);
    modalRef.componentInstance.data = new Task('', '', '', '', '', '');
    // modalRef.componentInstance.data = new Task('ang', 'new', 'salman', '2024-05-10', 'high', 'Due');

  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  // {
  //   key1: {},
  //   key2: {}
  // }

  private getAllTasks() {
    this.http.get<{ [key: string]: Task }>(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks.json`)
      .pipe(
        map((response) => {
          const tasks = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              tasks.push({
                id: key,
                ...response[key]
              });
            }
          }
          return tasks;
        }))
      .subscribe((tasks) => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }

  ngOnInit(): void {
    this.getAllTasks();
  }
}
