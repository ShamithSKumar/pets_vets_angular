import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
    declarations: [
        UserDashboardComponent],
    imports: [
        RouterModule,
        UserRoutingModule,
        //SharedModule,
        Ng2SmartTableModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        Ng2SmartTableModule,
        CommonModule
    ]
})
export class UserModule { }