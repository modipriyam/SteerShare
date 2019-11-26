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

    });
  }


validate(event: Event){
 let from =  (<HTMLInputElement> document.getElementById("from")).value;
 let to =  (<HTMLInputElement> document.getElementById("to")).value;


 //console.log(this.locations.length);
 console.log(this.hours);

 // tslint:disable-next-line: prefer-for-of
 for (let i = 0; i < this.locations.length; i++) {
  let name = this.locations[i].name;

  console.log(from);
  console.log(name);

  if(from === name && to === name)
    {
      window.alert('Location found');
      this.router.navigate(['/result']);
      break;
    }


  else
  {
    if (from !== name)
    {
        continue;

    }

  else if(to !== name)
    {
      continue;
    }

  }
}


}

}


