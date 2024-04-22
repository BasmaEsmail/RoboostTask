import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultDTO } from '../Models/result-dto';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { 
  }
  getStudentList(){
    this.http.get<ResultDTO>('').subscribe(res=>{

    })
  }
}
