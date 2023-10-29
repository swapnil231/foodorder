import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  issignup = false;
  issignup2 = true;

  gotoSignUp() {
    this.issignup = true;
    this.issignup2 = false;
  }
  gotosignin() {
    this.issignup = false;
    this.issignup2 = true;
  }
}
