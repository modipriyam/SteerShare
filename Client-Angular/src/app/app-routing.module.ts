import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import the generated components
import { LoginComponent } from "./users/login/login.component";
import { PostComponent } from "./rides/post/post.component";
import { SearchComponent } from "./rides/search/search.component";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'post',
    component: PostComponent 
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
