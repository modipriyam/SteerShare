import { RideService } from './../../services/ride.service';
import { Location } from './../locations.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  show: boolean = true;
locations: Array<Location>;
  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
    this.rideService.list().subscribe(locations => {
      this.locations = locations;
    });
  }


validate(event: Event){
 let val =  (<HTMLInputElement> document.getElementById("from")).value;


 console.log(this.locations.length);

 // tslint:disable-next-line: prefer-for-of
 for (let i = 0; i < this.locations.length; i++) {
  let name = this.locations[i].name;

  console.log(val);
  console.log(name);
  if (val === name){
    window.alert('Location found');
    this.router.navigate(['/result']);
    break;

  } else {
    window.alert('Location not found');
    break;
    }
  }
}

}
