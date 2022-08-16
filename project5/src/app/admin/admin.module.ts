import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashComponent } from './pages/dash/dash.component';
import { SettingComponent } from './pages/setting/setting.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
