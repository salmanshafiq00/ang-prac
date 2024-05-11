import { Component, Input, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() currentTask: Task;
  activeModal: NgbActiveModal = inject(NgbActiveModal);
}
