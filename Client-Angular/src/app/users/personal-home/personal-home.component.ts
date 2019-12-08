import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-personal-home',
  templateUrl: './personal-home.component.html',
  styleUrls: ['./personal-home.component.scss']
})
export class PersonalHomeComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if((this.currentUser = this.userService.currentUserValue)){
      //Check car and ride information
    }
    else{
      this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
    }
  }

}
