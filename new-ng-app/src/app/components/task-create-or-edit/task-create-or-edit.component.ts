import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../models/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-task-create-or-edit',
  templateUrl: './task-create-or-edit.component.html',
  styleUrl: './task-create-or-edit.component.scss',
  providers: [ToastService]
})
export class TaskCreateOrEditComponent {

  @Input() data: Task;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  task: Task;
  http: HttpClient = inject(HttpClient);

  modalTitle = 'Create Or Edit Task';

  ngbModalService: NgbModal = inject(NgbModal);
  activeModal: NgbActiveModal = inject(NgbActiveModal);
  toastrService: ToastrService = inject(ToastrService);
  @ViewChild('errorTemplate') errorTemplate: TemplateRef<any>;

  formSubmit(form: NgForm) {
    this.task.title = form.value.title;
    this.task.desc = form.value.desc;
    this.task.assignedTo = form.value.assignedTo;
    this.task.createdOn = `${this.task.createdOn.year}-${this.task.createdOn.month}-${this.task.createdOn.day}`;
    this.task.priority = form.value.priority;
    this.task.status = form.value.status;

    if (this.task.id) {
      this.editTask(this.task);
    } else {
      this.createTask(this.task);
    }
  }

  createTask(task: Task) {
    const headers = new HttpHeaders({
      'X-Cross-Check': 'Salman'
    });

    this.http.post<Task>(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks.json`, task, { headers: headers })
      .subscribe({
        next: (res) => {
          this.toastrService.success(`Save Successfully`, `success`);
          this.closeModal('after successfully save');
          this.closeModalEvent.emit(true);
        },
        error: (error) => {
          this.toastrService.error(`Failed to save`, `error`);
          this.closeModal('after successfully save');
          this.closeModalEvent.emit(false);
        }
      });
  }

  editTask(task: Task) {

    this.isExist(this.task.id).subscribe((isExist) => {
      if (!isExist) {
        this.toastrService.error(`Task not found`, `Error`);
        return;
      }
    });

    const headers = new HttpHeaders({
      'X-Cross-Check': 'Salman'
    });
    this.http.put<Task>(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks/${this.task.id}.json`, task, { headers: headers })
      .subscribe({
        next: (res) => {
          this.toastrService.success(`Update Successfully!`, `Success`);
          this.closeModal('after successfully update');
          this.closeModalEvent.emit(true);
        },
        error: (error) => {
          this.toastrService.error(`${error}`, `Error`);
          this.closeModalEvent.emit(false);
        }
      }

      );
  }

  isExist(id: string): Observable<boolean> {
    console.log(id);
    return this.http.get(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks/${id}.json`)
      .pipe(map((res) => {
        if (res) {
          return true;
        } else {
          return false;
        }
      }),
        catchError((error) => {
          return of(false);
        })
      );
  }

  closeModal(clzMsg: string = '') {
    this.activeModal.close(clzMsg);
    this.closeModalEvent.emit();
  }

  ngOnInit() {
    if (this.data) {
      this.task = new Task('', '', '', '', '', '');
      this.task.title = this.data.title;
      this.task.desc = this.data.desc;
      this.task.assignedTo = this.data.assignedTo;
      this.task.priority = this.data.priority;
      this.task.status = this.data.status;
      this.task.id = this.data.id;
    }
    const createdDate = new Date(this.data.createdOn);
    if (this.data.createdOn) {
      this.task.createdOn = { year: createdDate.getFullYear(), month: createdDate.getMonth(), day: createdDate.getDay() };
    }
  }
}








