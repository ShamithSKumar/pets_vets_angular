import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHtppInterceptorService } from './core/interceptor/interceptor';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    //LoginComponent,
    //UserDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    AuthenticationModule,
    HttpClientModule,
    UserModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
