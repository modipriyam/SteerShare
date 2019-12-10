import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000/';
  private socket;

  constructor() {

    this.socket = io(this.url);
   }


   joinRoom(data)
   {
       this.socket.emit('join',data);
   }

   newUserJoined()
   {
       let observable = new Observable<{user:String, message:String}>(observer=>{
           this.socket.on('new user joined', (data)=>{
               observer.next(data);
           });
           return () => {this.socket.disconnect();}
       });

       return observable;
   }

   leaveRoom(data){
    this.socket.emit('leave',data);
}


   public sendMessage(message){
     this.socket.emit('new-message', message);
   }

   public setUsername(username) {
    this.socket.emit('setUsername', username);
 };

   public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}
}

