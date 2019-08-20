import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  login = new FormGroup({
    username: new FormControl('',[
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get username(){
    return this.login.get('username');
  }
  get password(){
    return this.login.get('password');
  }

  // name = new FormControl('');
  ngOnInit() {
  }

}
