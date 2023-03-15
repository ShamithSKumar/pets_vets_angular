import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  username:String = "";
  password:String = "";
  
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,) {
    this.loginForm = this.formBuilder.group({
      username:'',
      password:''
    })  
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  onSubmit(){
    console.log("onSubmit")
    console.log("form value : ", this.loginForm)
    this.username = this.loginForm.get("username").value;
    this.password = this.loginForm.get("password").value;
    console.log("userNam : ", this.username)
    console.log("password : ", this.password)
    // this.loginForm.patchValue({
    //   username: 'shamith',
    //   password: '12345'
    // })
    //this.router.navigate(['/admin-dashboard'])
    this.router.navigateByUrl("/admin-dashboard")
  }

  
}
