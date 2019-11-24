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
  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rideService.list().subscribe(locations => {
      this.locations = locations;
    });
  }


validate(event: Event, location: Location){
  let val= location.name;
  console.log(val);

}

}
