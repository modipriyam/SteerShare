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


show: boolean = true;
locations: Array<Location>;
currentDate: string;
hours: string;

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
    this.rideService.list().subscribe(locations => {
      this.locations = locations;
      this.currentDate = new Date().toISOString().split("T")[0];
      var date= new Date();
      this.hours = date.getHours().toLocaleString();
      const element = (<HTMLInputElement>document.getElementById('date'));
    element.valueAsNumber = Date.now()-(new Date()).getTimezoneOffset()*60000;

    });
  }


validate(event: Event){
 let from =  (<HTMLInputElement> document.getElementById("from")).value;
 let to =  (<HTMLInputElement> document.getElementById("to")).value;
let date= (<HTMLInputElement> document.getElementById("date")).value;
let time=(<HTMLInputElement> document.getElementById("time")).value;
console.log(date);
console.log(time);


this.rideService.searchByLocationAndTime(from,to,date,time).subscribe(posts=>{
  console.log(posts);
  this.router.navigate(['/result']);



})




}




}


