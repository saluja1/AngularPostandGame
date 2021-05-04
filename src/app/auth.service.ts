import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Router } from  '@angular/router';
import {Observable} from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
   async signIn(userData: User):Promise<any[]>{
	var usersList:any = [];
 	await this.http.get<any[]>('http://localhost:3000/users')
	.toPromise()
	.then((response) => {
		response.forEach(checkUser);
		function checkUser(item, index) {
			if((item.name == userData.email) && (item.password == userData.password)){
				usersList.push(item);
			    localStorage.setItem('ACCESS_TOKEN', "access_token");
			} 
		}
    })
    .catch(err=> { console.log("error") });
    console.log(usersList)
	return usersList;

  }


  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
  register(user: User) {
  		return true
    }
}