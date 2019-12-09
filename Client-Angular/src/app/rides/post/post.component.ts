import { RideService } from './../../services/ride.service';
import { CarService } from '../../services/car.service';
import { UserService } from '../../services/user.service';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  currentUser: User;
  currentCar: Car;
  
  currentDate: string;
  hours: string;

  post: Post = new Post();
  from: string;
  to: string;
  travel_date: string;
  travel_time: string;
  seats: string;
  price: string;
  description: string;



  constructor(
    private RideService: RideService,
    private UserService: UserService,
    private CarService: CarService,
    private router: Router
    ) { }

  ngOnInit() {
    if((this.currentUser = this.UserService.currentUserValue)){
      this.CarService.get(this.currentUser._id)
        .subscribe((car)=>{
          this.currentCar = car;
        });
    }
    else{
      this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
    }

    
    this.currentDate = new Date().toISOString().split('T')[0];
    let date = new Date();
    this.hours = date.getHours().toLocaleString();
    const element = document.getElementById('date') as HTMLInputElement;
    element.valueAsNumber =
      Date.now() - new Date().getTimezoneOffset() * 60000;
  }


  addRide(event: Event) {
    console.log('Add clicked');
    console.log(this.post);
    let val1 = this.post.from;
    console.log(val1);
    this.RideService.add(this.post).subscribe();
  }

}
