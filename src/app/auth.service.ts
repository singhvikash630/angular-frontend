import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Jwttoken } from './jwttoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = "http://localhost:8081/auth/login";
  constructor(private httpClient: HttpClient) { }
  login(user: User) {
    this.httpClient.post<Jwttoken>(`${this.loginURL}`, user).subscribe(data => {
      localStorage.setItem('token', data.jwttoken);
    }, error => console.log(error));
  }

  logout() {
    localStorage.removeItem("token");
  }
}
