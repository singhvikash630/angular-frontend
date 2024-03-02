import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Jwttoken } from '../jwttoken';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isLogin!: boolean;
  jwtToken: Jwttoken = new Jwttoken();
  constructor(private courseService: CourseService, private authService: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    if (localStorage.getItem("token") != null) {
      this.goToCourseList();
    }
  }
  user: User = new User();
  onSubmit() {
    console.log(this.user);
    this.authService.login(this.user);
    this.isLogin = this.authService.showErrorMessage;
  }

  goToCourseList() {
    this.router.navigate([`/course`]);
  }
}

