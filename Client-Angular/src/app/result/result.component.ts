import { post } from 'selenium-webdriver/http';
import { SearchComponent } from './../rides/search/search.component';
import { Observable } from 'rxjs';
import { RideService } from './../services/ride.service';
import { Post } from './../models/post.model';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  posts: Array<Post>;


  constructor(private rideService: RideService, private route: ActivatedRoute) { }

  ngOnInit() {

  this.route.queryParams.subscribe(params => {
    /**Receiving parameters from query*/
    let from = params['from'];
    let to = params['to'];
    let date = params['date'];
    let time = params['date'];

    /**Assigning it to Search Function */

    this.rideService.searchByLocationAndTime(from, to, date, time).subscribe(posts => {
       console.log(posts);
       this.posts = posts;
    });



    })

}
}
