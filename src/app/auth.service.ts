import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Router } from  '@angular/router';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  isLoogedIn = false;
  userRole = "user";
  constructor(private toastr:ToastrService, private http: HttpClient, private router: Router) { }


   async signIn(userData: User):Promise<any[]>{

	var usersList:any = [];
	var userLoggedIn = false;
	var userLoggedInRole = this.userRole;

 	await this.http.get<any[]>('http://localhost:3000/users')
	.toPromise()
	.then((response) => {

		response.forEach(checkUser);
		function checkUser(item, index) {
			if((item.username == userData.email) && (item.password == userData.password)){
				usersList.push(item);
			    userLoggedIn = true;
			    if(item.role == "admin"){
			    	userLoggedInRole = item.role;
			    }
			    localStorage.setItem('ACCESS_TOKEN', "access_token");
			} 
		}
    })
    .catch(err=> { console.log(err) });
    this.isLoogedIn = userLoggedIn;
    this.userRole = userLoggedInRole;
    console.log(this.isLoogedIn, this.userRole, usersList)
	return usersList;
  }


  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
    return this.isLoogedIn;
  }

  public checkUserRole(){
    return this.userRole;
  }


  public logout(){
	this.isLoogedIn = false;
    localStorage.removeItem('ACCESS_TOKEN');
  }

   async register(userData):Promise<any>{

	var usersList:any = {};
	var userExist = false;

 	await this.http.get<any[]>('http://localhost:3000/users')
	.toPromise()
	.then((response) => {
		response.forEach(checkUser);
		function checkUser(item, index) {
			if((item.username == userData.username)){
				usersList = {success: false, msg: "Username Exist"};
				userExist = true;
			} 
		}
		if(userExist){
			this.router.navigateByUrl('/login');
			return this.toastr.info('Username Exist');
			return usersList;		
		}
		return userExist;
    }).then((res) => { 
		if(!res){
		 	this.http.post<any[]>('http://localhost:3000/users', userData)
			.toPromise()
			.then((response) => {
				usersList = response;
				console.log(usersList)
				this.router.navigateByUrl('/game');
				return this.toastr.success('User Created');
			    return usersList;
			})
		}
     })
    .catch(err=> { return usersList });
  }

}