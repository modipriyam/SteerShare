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


  public joinRoom(data)
   {
       this.socket.emit('join',data);
   }

  public newUserJoined()
   {
       let observable = new Observable<{user:String, message:String}>(observer=>{
           this.socket.on('new user joined', (data)=>{
               observer.next(data);
           });
           return () => {this.socket.disconnect();}
       });

       return observable;
   }

  public leaveRoom(data){
    this.socket.emit('leave',data);
}


public userLeftRoom(){
  let observable = new Observable<{user:String, message:String}>(observer=>{
      this.socket.on('left room', (data)=>{
          observer.next(data);
      });
      return () => {this.socket.disconnect();}
  });

  return observable;
}



   public sendMessage(message){
     this.socket.emit('message', message);
   }

//    public setUsername(username) {
//     this.socket.emit('setUsername', username);
//  };


 newMessageReceived(){
  let observable = new Observable<{user:String, message:String}>(observer=>{
      this.socket.on('new message', (data)=>{
          observer.next(data);
      });
      return () => {this.socket.disconnect();}
  });

  return observable;
}

  //  public getMessages = () => {
  //   return Observable.create((observer) => {
  //       this.socket.on('new-message', (message) => {
  //           observer.next(message);
  //       });
  //   });
}


