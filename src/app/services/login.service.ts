import { Injectable } from '@angular/core';
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private listUser: User[] = [
    {
      email: 'jerfersongriza@gmail.com',
      name: 'Jefe',
      password: '1234',
      isAdmin: true

    },
    {
      email: 'prof@escola.com',
      name: 'Professora',
      password: '1234',
      isAdmin: false

    },
    {
      email: 'prof@escola.com',
      name: 'Gestão',
      password: '1234',
      isAdmin: true
    }
  ]

  constructor() { }

  loginExecute(email: string, password: string): User | undefined{
    const user = this.listUser.find((item) => item.email === email && item.password === password)

    if (!user) {
      return undefined
    }
    localStorage.setItem('currentSessionUser', JSON.stringify(user));
    return user
  }

  logout() {
    localStorage.setItem('currentSessionUser', undefined as any);
  }

  public get currentUserValue(): User | null {
    if (this.userIsLogged) {
      return JSON.parse(localStorage.getItem('currentSessionUser') as any)
    }
    return null
  }

  public get userIsLogged(): boolean {
    return JSON.parse(localStorage.getItem('currentSessionUser') as any) ? true : false
  }
}
