import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './events';
import { Secret } from './Secret';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Events[] = [];
  key : Secret = new Secret();
  baseUrl : string = this.key.eventUrl;
  constructor(private http:HttpClient) { }

  GetEvents():Observable<Events[]>{
    return this.http.get<Events[]>(this.baseUrl);
  }

  AddEvent(newEvent: Events):Observable<void>{
    return this.http.post<void>(this.baseUrl, newEvent);
  }

  DeleteEvent(id: number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+id);
  }
  EditEvent(id: number, editEvent: Events):Observable<void>{
    return this.http.put<void>(this.baseUrl+"/"+id, editEvent);
  }

}
