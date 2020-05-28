import { HttpClient } from '@angular/common/http';
import { DatapassService } from './../../../datapass.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users = [
    { name: 'Anuwat', lastname: 'Sukthong', age: 20 },
    { name: 'Peter', lastname: 'Parker', age: 21 },
    { name: 'Harry', lastname: 'Potter', age: 22 },
  ];
  userData = {
    email: '',
    password: '',
  };
  constructor(
    private router: Router,
    private data: DatapassService,
    private http: HttpClient
  ) {}
  submitLogin() {
    this.http
      .post('http://202.28.34.250/webdev/login', JSON.stringify(this.userData))
      .subscribe(
        (response) => {
          if (response) {
            this.router.navigateByUrl('/dashboard/' + this.userData.email);
          } else {
            console.log('login fail');
          }
        },
        (error) => {
          console.log('Fail');
        }
      );
  }

  ngOnInit(): void {}
}
