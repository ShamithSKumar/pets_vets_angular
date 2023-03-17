import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

const routes: Routes = [ 
    {path: 'user-dashboard', component: UserDashboardComponent}
   ];
   @NgModule({
       imports: [RouterModule.forChild(routes)],
       exports: [RouterModule],
     })
   export class UserRoutingModule { }