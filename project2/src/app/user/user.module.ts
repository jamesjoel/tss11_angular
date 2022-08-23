import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InfoComponent } from './shared/info/info.component';
import { SliderComponent } from './shared/slider/slider.component';
import { PopulerComponent } from './shared/populer/populer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';




@NgModule({
  declarations: [
    UserComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    SliderComponent,
    PopulerComponent,
    SignupComponent,
    LoginComponent,
    MyAccountComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
