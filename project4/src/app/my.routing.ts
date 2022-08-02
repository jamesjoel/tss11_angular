import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";

const arr : Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "about",
        component : AboutComponent
    }
];




@NgModule({
    exports : [RouterModule],
    imports : [RouterModule.forRoot(arr)]
})

export class MyRouting{

}