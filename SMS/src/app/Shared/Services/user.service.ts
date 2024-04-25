import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../Models/user-dto';
import { ResultDTO } from '../Models/result-dto';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginResultDTO } from '../Models/login-result-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loginMessage: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>('');


  constructor(private http: HttpClient, private router: Router) {

  }
  register(newUser: UserDTO) {
    return this.http.post<ResultDTO>(`${environment.apiURL}/User/Post`, newUser);
  }
  login(user: any) {
    return this.http.post<LoginResultDTO>(`${environment.apiURL}/User/Login`, user);

  }
  logout(token:string|null) {
    const headers = {
      'Content-Type': 'application/json',
      "token": `${token}`,
      
    }
    
    return this.http.post<any>(`${environment.apiURL}/User/Logout`,null,{headers});

  }
  getLoggedIn() {
    let token = sessionStorage.getItem('token')

    if (token != null)
      return true
    else
      return false
  }
}
