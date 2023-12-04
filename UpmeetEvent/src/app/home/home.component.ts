import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  
  displayList : Events[] = [];

  constructor(private eventsService: EventsService){ 

  }
  ngOnInit(): void {
    this.setViewing("events")
  }

  setViewing(showView: string){   
    if(showView==="events"){
      this.displayList = this.eventsService.events;
    }
    else{
      this.displayList = this.eventsService.events.filter(e => e.favorite===true)
    }
  }
  


}
