import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Jwttoken } from './jwttoken';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showErrorMessage = false;
  private loginURL = "http://localhost:8081/auth/login";
  constructor(private httpClient: HttpClient, private router: Router) { }
  login(user: User) {
    this.httpClient.post<Jwttoken>(`${this.loginURL}`, user).subscribe(data => {
      localStorage.setItem('token', data.jwttoken);
      this.router.navigate([`/course`]);
    }, error => {
      console.log(error);
      this.showErrorMessage = true;
    });
  }

  logout() {
    localStorage.removeItem("token");
  }

  validateToken() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate([`/login`]);
    }
  }
}
