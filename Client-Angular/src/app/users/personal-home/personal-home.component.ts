import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-personal-home',
  templateUrl: './personal-home.component.html',
  styleUrls: ['./personal-home.component.scss']
})
export class PersonalHomeComponent implements OnInit {
  currentUser: User;
  currentCar: Car;

  constructor(
    private userService: UserService,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if((this.currentUser = this.userService.currentUserValue)){
      console.log("sending car request");
      this.carService.get(this.currentUser._id)
        .subscribe((car)=>{
          this.currentCar = car;
        })
    }
    else{
      this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
    }
  }

}
