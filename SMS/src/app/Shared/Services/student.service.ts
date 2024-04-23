import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultDTO } from '../Models/result-dto';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { AddStudentDTO } from '../Models/add-student-dto';
import { StudentDataDTO } from '../Models/student-data-dto';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { 
  }
  getStudentList():Observable<ResultDTO>{
   return this.http.get<ResultDTO>(`${environment.apiURL}/Student/Get`)
  }
  createStudent(newStudent:AddStudentDTO):Observable<ResultDTO>{
    return this.http.post<ResultDTO>(`${environment.apiURL}/Student/Post`,newStudent)
  }
  deleteStudent(id?:number):Observable<ResultDTO>{
    return this.http.delete<ResultDTO>(`${environment.apiURL}/Student/Delete?id=${id}`)
  }
  getStudentByID(id?:number){
    return this.http.get<any>(`${environment.apiURL}/Student/GetByID?id=${id}`)

  }
}
