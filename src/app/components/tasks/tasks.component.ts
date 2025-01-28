import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] =[]

  constructor(private taskService: TaskService ) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe(
      (tasks) => (this.tasks = tasks)
    );
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(
      () => {
        console.log(`Task deleted: ${task.id}`);
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
      (error) => console.error('Delete task failed:', error)
    );
    
  }
  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe(
      (task) => (this.tasks.push(task))
    );
  }
}
