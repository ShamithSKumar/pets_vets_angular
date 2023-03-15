import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
    declarations: [ ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        Ng2SmartTableModule
        ],
    exports: [ 
        ReactiveFormsModule,
        FormsModule,
        Ng2SmartTableModule]
})
export class SharedModule { }