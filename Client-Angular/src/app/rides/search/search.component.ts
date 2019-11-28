import { Router } from '@angular/router';
import { RideService } from './../../services/ride.service';
import { Location } from './../locations.model';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



locations: Array<Location>;
currentDate: string;
hours: string;

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
    this.rideService.list().subscribe(locations => {
      this.locations = locations;
      this.currentDate = new Date().toISOString().split('T')[0];
      var date = new Date();
      this.hours = date.getHours().toLocaleString();
      const element = (document.getElementById('date') as HTMLInputElement);
      element.valueAsNumber = Date.now() - (new Date()).getTimezoneOffset() * 60000;

    });
  }


  validate(event: Event) {
    let from = (document.getElementById('from') as HTMLInputElement).value;
    let to = (document.getElementById('to') as HTMLInputElement).value;
    let date = (document.getElementById('date') as HTMLInputElement).value;
    let time = (document.getElementById('time') as HTMLInputElement).value;
    console.log(date);
    console.log(time);


    this.rideService.searchByLocationAndTime(from, to, date, time).subscribe(posts => {
      console.log(posts);
      if (posts.length !== 0) {
        this.router.navigate(['/result']);
      }



    })




}




}


