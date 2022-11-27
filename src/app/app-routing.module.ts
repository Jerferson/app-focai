import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { ApplicationComponent } from './application/application.component'
import { ClassesComponent } from './classes/classes.component'
import { ContentsComponent } from './contents/contents.component'
import { GroupComponent } from './group/group.component'
import { HomeComponent } from './home/home.component'
import { ImportationComponent } from './importation/importation.component'
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'

const routes: Routes = [
  {
    path: '', component: ApplicationComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'classes',
        component: ClassesComponent
      },
      {
        path: 'group',
        component: GroupComponent
      },
      {
        path: 'importation',
        component: ImportationComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'contents',
        component: ContentsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
