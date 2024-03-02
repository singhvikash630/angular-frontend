import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { User } from './user';
import { Jwttoken } from './jwttoken';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseURL = "http://localhost:8081/course";
  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) { }

  getCourseList(): Observable<Course[]> {
    this.authService.validateToken();

    return this.httpClient.get<Course[]>(`${this.baseURL}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  createCourse(course: Course): Observable<Object> {
    this.authService.validateToken();
    return this.httpClient.post(`${this.baseURL}`, course, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  getCourseById(id: number): Observable<Course> {
    this.authService.validateToken();
    return this.httpClient.get<Course>(`${this.baseURL}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    this.authService.validateToken();
    return this.httpClient.put<Course>(`${this.baseURL}/${id}`, course, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    })
  }

  deleteCourse(id: number): Observable<Object> {
    this.authService.validateToken();
    return this.httpClient.delete(`${this.baseURL}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }
}
