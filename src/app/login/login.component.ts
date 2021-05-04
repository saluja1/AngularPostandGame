import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import {Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted  =  false;

  constructor(private toastr:ToastrService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.authForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  get formControls() { return this.authForm.controls; }

	async signIn(){
		this.isSubmitted = true;
		if(this.authForm.invalid){
		  return;
		}


    await this.authService.signIn(this.authForm.value).then((data)=> {if(data.length == 0){ return this.toastr.warning('Not Matched') }  data.map((data)=>{ if(data.id > 0){
      this.router.navigateByUrl('/game');
      return this.toastr.success('Login Success')}  })}).catch(function() { console.log('error')
    });
  }
}
