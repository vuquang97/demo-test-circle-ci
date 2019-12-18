import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: any = [];

  add(mess) {
    this.message.push(mess);
  }

  clear() {
    this.message = [];
  }
  constructor() { }
}
