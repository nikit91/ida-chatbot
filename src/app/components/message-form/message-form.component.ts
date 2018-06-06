import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Output() msgemitter = new EventEmitter<Message>();
  constructor() { }

  ngOnInit() {
  }

  sendMessage(msg: string) {
    const curTime = new Date();
    const message = new Message(msg, 'User', 'user', curTime);
    this.msgemitter.emit(message);
  }
}
