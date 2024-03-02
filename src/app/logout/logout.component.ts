import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.validateToken();
    this.authService.logout();
  }

}
