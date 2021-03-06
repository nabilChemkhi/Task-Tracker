import { TaskService } from './../../services/task.service';

import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tascks',
  templateUrl: './tascks.component.html',
  styleUrls: ['./tascks.component.css']
})
export class TascksComponent implements OnInit {
  tasks?:Task[] = [];
  //task?:Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }

  delete(task: Task){
   // console.log(task.id);
     this.taskService.deleteTask(task)
       .subscribe(
         () => this.tasks = this.tasks?.filter(
           (t)=>t.id !== task.id
         )
         );

  }

  toggle(t: Task){

    t.reminder = !t.reminder;
   // console.log(t.reminder);
   this.taskService.updateTaskReminder(t).subscribe();
  }

  addTask(task: Task){
    //console.log(task);
    this.taskService.addTaskService(task).subscribe(
      (task)=>this.tasks?.push(task));
  }

}
