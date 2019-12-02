import { post } from 'selenium-webdriver/http';
import { RideService } from './../services/ride.service';
import { Post } from 'src/app/models/post.model';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.scss']
})
export class ConfirmbookingComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private RideService: RideService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.RideService.view(id).subscribe(newPost => {this.post = newPost});

  }

}
