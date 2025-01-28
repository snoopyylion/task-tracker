import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Emits the task to be deleted to the parent component.
   */
/******  87ef33ac-0314-4b53-ba67-5b1f79dbcf1e  *******/  
onDelete(){
    this.onDeleteTask.emit(this.task)
  }


onToggle(){
    this.onToggleReminder.emit(this.task)
  }
}
