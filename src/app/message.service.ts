import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []

  getMessages(): string[]{
    return this.messages;
  }

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
