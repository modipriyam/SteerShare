import { RideService } from './../../services/ride.service';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  currentDate: string;
  hours: string;

 post : Post = new Post();
 from: string;
 to: string;
 travel_date: string;
 travel_time: string



  constructor(private RideService: RideService) { }

  ngOnInit() {

    this.currentDate = new Date().toISOString().split('T')[0];
      let date = new Date();
      this.hours = date.getHours().toLocaleString();
      const element = document.getElementById('date') as HTMLInputElement;
      element.valueAsNumber =
        Date.now() - new Date().getTimezoneOffset() * 60000;
  }


  addRide(event: Event){
    console.log('Add clicked');
    console.log(this.post);
    let val1=this.post.from;
    console.log(val1);
    this.RideService.add(this.post).subscribe();
  }

}
