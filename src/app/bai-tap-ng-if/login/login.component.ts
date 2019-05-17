import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string ;
  isLogin: boolean = false;
  Login(username, pass) {
    if (username === "Cybersoft" && pass === "Cybersoft") {
      this.name = username;
      this.isLogin = true;
      localStorage.setItem("userLogin", username)
    }
  }
  constructor() { }

  ngOnInit() {
    let userLogin = localStorage.getItem("userLogin");
    if (userLogin !== null) {
      this.name = userLogin;
      this.isLogin = true;
    }
  }

}
