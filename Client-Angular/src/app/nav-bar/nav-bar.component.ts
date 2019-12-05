import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedin: boolean;
  currentUser: JSON;

  constructor(
    private router: Router,
    public userService: UserService
  ) {
    if(this.userService.currentUserValue){
      this.loggedin = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  ngOnInit() {
  }

  ifLoggedIn(event:Event){
    if(this.userService.currentUserValue){
      this.router.navigate(['/post']);
      console.log('if')

  } else{
    this.router.navigate(['/login']);
    console.log('else')
  }
}
}
