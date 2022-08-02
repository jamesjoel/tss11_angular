import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Lazy loading
  {
    path : "",
    loadChildren : ()=> import("./user/user.module").then(u=>u.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import("./admin/admin.module").then(x=>x.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
  obj.hello = ()=>



*/
