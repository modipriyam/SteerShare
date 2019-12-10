import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser: User;
  loggedin: boolean;

  constructor(
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit() {
    if(this.userService.currentUserValue){
      this.loggedin = true;
      this.currentUser = this.userService.currentUserValue;
    }
    this.userService.getCurrentUser.subscribe((user)=>{
      this.loggedin = true;
      this.currentUser = user;
    })
  }

  logout(){
    this.loggedin = false;
    this.userService.logout();
  }

  ifLoggedIn(event:Event){
    if(this.userService.currentUserValue){
      this.router.navigate(['/post']);

  } else{
    this.router.navigate(['/login']);
  }}


  ifLoggedInchat(event:Event){
  if(this.userService.currentUserValue){
    this.router.navigate(['/chat']);
  } else{
    this.router.navigate(['/chat']);
  }}






}
