import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }
  
  toggleAddTask(){
    this.uiService.toggleAddTask();
    console.log('toggle adding task!')
  }

  hasRoute(route: string): boolean{
   return this.router.url == route; 
  }
}
