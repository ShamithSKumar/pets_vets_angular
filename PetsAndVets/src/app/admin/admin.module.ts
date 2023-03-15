import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { SharedModule } from "../shared/shared.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    declarations: [
        AdminDashboardComponent],
    imports: [
        RouterModule,
        AdminRoutingModule,
        //SharedModule,
        Ng2SmartTableModule,
        CommonModule
    ],
    exports: [
        Ng2SmartTableModule,
        CommonModule
    ]
})
export class AdminModule { }