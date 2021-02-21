import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly router: Router) { }

  signinType = 'admin';

  buttons = [
    {
      text: 'Admin',
      id: 'admin'
    },
    {
      text: 'Student',
      id: 'student'
    },
    {
      text: 'Teacher',
      id: 'teacher'
    },
  ];

  onSegmentedItemChange($event) {
    console.log('changed', $event);
    this.signinType = $event.id;
  }

  login() {
    this.router.navigateByUrl('/home');
  }

  // onButtonSelected($event)
}
