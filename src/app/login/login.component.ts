import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private apiservice:ApiServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [],
      password: []
    });
    console.log("fdgdd",this.loginForm.value)
  }


  submit() {
    this.apiservice.login(this.loginForm.value);
  console.log("jdjkjfdkj",this.loginForm.value)
    this.router.navigate(['/home'])
  }
}
