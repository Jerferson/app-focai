import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {

    const res = this.loginService.logout()
    this.router.navigate(['/login'])
  }
}
