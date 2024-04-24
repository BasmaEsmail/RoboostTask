import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../Models/user-dto';
import { ResultDTO } from '../Models/result-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }
  register(newUser:UserDTO){
    return this.http.post<ResultDTO>(`${environment.apiURL}/User/Post`,newUser);
  }
  login(user:any){
    return this.http.post<ResultDTO>(`${environment.apiURL}/User/Login`,user);

  }
  logout(){
    return this.http.post<ResultDTO>(`${environment.apiURL}/User/Logout`,null);

  }
}
