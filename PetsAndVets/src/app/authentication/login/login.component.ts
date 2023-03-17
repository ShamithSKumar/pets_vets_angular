import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/helper/storage.service';
import { Service } from 'src/app/core/services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  username:String = "";
  password:String = "";
  registerForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private services:Service,
    private storageService: StorageService,
    ) {
    this.loginForm = this.formBuilder.group({
      userName:'',
      password:''
    });
    this.registerForm = this.formBuilder.group({
      userName:'',
      password:'',
      email:'',
      phone:''
    })  
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    })
  }
  onSubmit(){
    this.storageService.clearLocalStorage();
    console.log("first : "+this.storageService.getLocalStorage('token'))
    this.services.login(this.loginForm.value).subscribe((res: any) => {
      if(res.status){
        let tokenStr= 'Bearer '+ res.data.token;
        this.storageService.setLocalStorage('token', tokenStr);
        if(res.data.role === 'ROLE_ADMIN'){
          this.router.navigateByUrl("/admin-dashboard")
        }else{
          this.router.navigateByUrl("/user-dashboard")
        }
      }else{
        console.log("wrong credential")
      }
    })
  }
  onRegister(){
    console.log("this.registerForm.value ", this.registerForm.value)
    this.services.register(this.registerForm.value).subscribe((res: any) => {
      if(res.status){

      }
    })
  }
  
}
