import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { AddNewEventComponent } from './add-new-event/add-new-event.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'addNewEvent',component: AddNewEventComponent},
  {path:"", redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }