import { Routes } from '@angular/router';
 
import { HomeComponent } from './home/home.component'; 

import { AboutComponent} from './about/about.component';

import { ContactComponent} from './contact/contact.component';
  
 
import { ExploreMapComponent} from './explore-map/explore-map.component';
  


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    
    
         {path: 'home', component: HomeComponent},
    
     {path: 'about', component: AboutComponent} ,
     {path: 'contact', component: ContactComponent} ,
     
     {path: 'exploremap', component: ExploreMapComponent} ,
     {path: 'contact', component: ContactComponent} 
 
   
];