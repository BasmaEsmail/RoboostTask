import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultDTO } from '../Models/result-dto';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { AddStudentDTO } from '../Models/add-student-dto';


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
}
