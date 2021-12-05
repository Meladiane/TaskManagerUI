import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  toggleReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    task.reminder = !task.reminder;
    return this.httpClient.put<Task>(url, task); 
   }

   addTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.apiUrl, task); 
   }
}
