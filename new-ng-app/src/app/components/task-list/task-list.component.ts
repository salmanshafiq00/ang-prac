import { Component, OnInit, inject } from '@angular/core';
import { ModalDialogService } from '../../shared/services/modal-dialog.service';
import { TaskCreateOrEditComponent } from '../task-create-or-edit/task-create-or-edit.component';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TaskDetailComponent } from '../task-detail/task-detail.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  providers: [ModalDialogService]
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  modalService: ModalDialogService = inject(ModalDialogService);
  ngbModalService: NgbModal = inject(NgbModal)
  closeResult = '';
  toastrService: ToastrService = inject(ToastrService)
  http: HttpClient = inject(HttpClient);
  isLoading: boolean = false;

  OpenCreateTaskForm(id?: any) {

    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Prevent closing on backdrop click
      backdropClass: 'light-blue-backdrop',
    };
    const modalRef = this.ngbModalService.open(TaskCreateOrEditComponent, modalOptions);
    if (id) {
      modalRef.componentInstance.data = this.tasks.find(task => task.id === id);
    }
    else {
      modalRef.componentInstance.data = new Task('', '', '', '', '', '');
    }
    modalRef.componentInstance.closeModalEvent.subscribe((isCloseSuccessfully) => {
      if (isCloseSuccessfully) {
        this.getAllTasks();
      }
    });
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

  getAllTasks() {
    this.isLoading = true;
    this.http.get<{ [key: string]: Task }>(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks.json`)
      .pipe(
        tap((res) => {
          console.log(res);
        }),
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
        this.tasks = tasks;
        this.isLoading = false;
      });
  }

  detailTask(task: Task) {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Prevent closing on backdrop click
      backdropClass: 'light-blue-backdrop',
    };
    const modalRef = this.ngbModalService.open(TaskDetailComponent, modalOptions);
    modalRef.componentInstance.currentTask = task;
  }

  deleteTask(id: string) {
    this.isTaskExist(id)
      .subscribe((isTaskExist: boolean) => {
        if (!isTaskExist) {
          this.toastrService.error(`Task Not Found`, `Error`)
          return;
        }
      });

    this.http.delete(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks/${id}.json`)
      .subscribe({
        next: (res) => {
          this.toastrService.success(`Delete Successfully`, `success`);
          this.getAllTasks();
        },
        error: (error) => {
          this.toastrService.success(`Delete Failed`, `error`);
        }
      });
  }

  private isTaskExist(id: string): Observable<boolean> {
    return this.http.get(`https://angular-http-f87e6-default-rtdb.firebaseio.com/tasks/${id}.json`)
      .pipe(
        map((res) => {
          if (res) return true;
          else return false;
        }),
        catchError((error) => {
          return of(false)
        })
      );
  }

  ngOnInit(): void {
    this.getAllTasks();
  }
}








