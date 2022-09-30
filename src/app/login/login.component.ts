import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

  
})
export class LoginComponent implements OnInit {

  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
