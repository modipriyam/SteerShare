import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 message: String;
 messages: string[] = [];

  constructor(private chatservice: ChatService) { }



  ngOnInit() {
    this.chatservice
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }


  
  

  sendMessage(){
    this.chatservice.sendMessage(this.message);
    this.message = '';
  }

}
