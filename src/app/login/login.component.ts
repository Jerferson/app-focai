import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    if (this.loginService.userIsLogged){
      this.router.navigate(['/']);
    }
  }

  login(): void {
    const email = this.loginForm.get('email')
    const password = this.loginForm.get('password')

    const res = this.loginService.loginExecute(email!.value, password!.value)
    if (!res) {
      alert("Usuário ou senha inválidos!")
      return
    }
    if (res.isAdmin) {
      this.router.navigate(['/'])
      return
    }
    this.router.navigate(['/classes'])
  }
}
