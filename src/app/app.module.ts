import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ImportationComponent } from './importation/importation.component';
import { ClassesComponent } from './classes/classes.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContentsComponent } from './contents/contents.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service'
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationComponent } from './application/application.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupComponent,
    ImportationComponent,
    ClassesComponent,
    RegistrationComponent,
    ContentsComponent,
    LoginComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
