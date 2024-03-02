import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent implements OnInit {
  course: Course = new Course();
  constructor(private courseService: CourseService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.validateToken();
  }
  saveCourse() {
    this.courseService.createCourse(this.course).subscribe(data => {
      console.log(data);
      this.goToCourseList();
    }, error => console.log(error));
  }

  goToCourseList() {
    this.router.navigate([`/course`]);
  }
  onSubmit() {
    console.log(this.course);
    this.saveCourse();
  }
}
