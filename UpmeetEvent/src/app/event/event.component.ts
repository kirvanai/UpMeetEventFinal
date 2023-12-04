import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventsService } from '../events.service';
import { Events } from '../events';
import { FavoritesService } from '../favorites.service';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  favorites: Favorite[] = [];
  viewDetails: boolean = true;
  favorite: boolean = true;
  @Input()
  displayList : Events[] = [];
  // viewingData: string = "events"

  constructor(private eventsService: EventsService, private favoritesService: FavoritesService){ }
      
  ngOnInit(): void {
    this.eventsService.GetEvents().subscribe(
      (eventsResult)=>{
        this.eventsService.events = eventsResult;        
        this.favoritesService.getFavorites(1).subscribe(
          (favoritesResult)=>{
            this.favorites = favoritesResult;        
            this.favorites.forEach( favorite => {
              let event = this.eventsService.events.find(e => e.id === favorite.eventId)
              if (event != undefined){
                event.favorite = true;
                event.favoriteId = favorite.id;
              }
            })
            }      
        )
        
      }      
    )

  }

  

  onClick(){
    this.viewDetails = !this.viewDetails;
    
  }

}
