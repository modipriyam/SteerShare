import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  currentDate: string;
  hours: string;
  constructor() { }

  ngOnInit() {

    this.currentDate = new Date().toISOString().split('T')[0];
      let date = new Date();
      this.hours = date.getHours().toLocaleString();
      const element = document.getElementById('date') as HTMLInputElement;
      element.valueAsNumber =
        Date.now() - new Date().getTimezoneOffset() * 60000;
  }

}
