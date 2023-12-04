import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventsService } from '../events.service';
import { Events } from '../events';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrls: ['./add-new-event.component.css']
})
export class AddNewEventComponent implements OnInit {

  setViewing(arg0: string) {
throw new Error('Method not implemented.');
}
  @Input()
  newEvent : Events = {} as Events;
  constructor(private eventsService: EventsService, private _router: Router){ }
ngOnInit(): void {
  
}


addEvent(){
  this.eventsService.AddEvent(this.newEvent).subscribe(() => this._router.navigate(['home']))  
}
}
