import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  newMessage() {
    this.router.navigateByUrl('/messages/create');
  }

}
