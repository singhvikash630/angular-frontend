import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent implements OnInit {
  id!: number;
  course: Course = new Course();
  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.courseService.updateCourse(this.id, this.course).subscribe(data => {
      this.goToCourseList();
    }, error => {
      console.log(error);
      
    });
  }

  goToCourseList() {
    this.router.navigate([`/course`]);
  }

}
