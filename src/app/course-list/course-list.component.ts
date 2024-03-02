import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] | undefined;
  constructor(private courseService: CourseService, private router: Router) { }
  ngOnInit(): void {
    this.getCourseList();
  }
  private getCourseList() {
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data;
    });
  }
  updateCourse(id: number) {
    console.log(id);
    this.router.navigate([`update-course`, id]);
  }
  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(data => {
      console.log(data);
      this.getCourseList();
    })
  }

  courseDetails(id: number) {
    this.router.navigate(['course-details', id]);
  }
}
