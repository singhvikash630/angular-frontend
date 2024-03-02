import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  id!: number;
  course!: Course;
  constructor(private route: ActivatedRoute, private courseService: CourseService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    });
  }



}
