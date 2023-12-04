import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Favorite } from './favorite';
import { Secret } from './Secret';
import { Events } from './events';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  key : Secret = new Secret();
  baseUrl : string = this.key.favoriteUrl;
  constructor(private http:HttpClient) {}
    
  getFavorites(userId: number):Observable<Favorite[]>{
    return this.http.get<Favorite[]>(this.baseUrl+"/"+userId);
  } 

  getUser(id: number):Observable<User>{
    return this.http.get<User>(this.baseUrl+"/"+id);
  }
  
  AddFavorite(newFavorite: Favorite):Observable<Favorite>{
    console.log(this.baseUrl + newFavorite)
    return this.http.post<Favorite>(this.baseUrl, newFavorite);
  }

  DeleteFavorite(favoriteId : number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+ favoriteId);
  }

}