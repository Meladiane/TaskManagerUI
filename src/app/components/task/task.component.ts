import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  
  constructor() {   
  }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
    // console.log("Delete task C.K");
    // console.log(task)


  }

}
