import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Tasck Tracker';
  showAddTask?: boolean ;
  subscrition?: Subscription;

  constructor(private uiService:UiService) {
     this.subscrition=this.uiService.onToggle()
     .subscribe(
       (v)=>this.showAddTask=v
     );
  }

  ngOnInit(): void {
  }

  toggleAddTasck(){
   // console.log('toggle');
   // this.showAddTask= !this.showAddTask;
    this.uiService.toggleAddTask();

  }

}
