import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RoomsComponent } from './rooms/rooms.component';
import { MealsComponent } from './meals/meals.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent }, 
    { path: 'login', component: LoginComponent },   
    { path: 'list-trips', component: TripListingComponent },
    { path: 'news', component: NewsComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'meals', component: MealsComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }