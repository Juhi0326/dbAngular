import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  get messages() {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService,
              private router: Router) { }

  close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.clear();
    this.messageService.isDisplayed = false;
  }

}
