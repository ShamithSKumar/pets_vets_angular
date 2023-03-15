import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [LoginComponent],
    imports: [
      AuthenticationRoutingModule,
      //SharedModule,
      ReactiveFormsModule,
      FormsModule
    ]
  })
  export class AuthenticationModule { }