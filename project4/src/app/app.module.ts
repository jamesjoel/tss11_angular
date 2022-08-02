import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyRouting } from './my.routing';



import { AppComponent } from './app.component';
import { Demo1Component } from './shared/demo1/demo1.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MyRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
