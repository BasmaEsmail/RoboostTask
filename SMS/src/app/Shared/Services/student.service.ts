import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultDTO } from '../Models/result-dto';
import { environment } from 'src/environments/environment.development';
import { Subject, Observable } from 'rxjs';
import { AddStudentDTO } from '../Models/add-student-dto';
import { StudentDataDTO } from '../Models/student-data-dto';
import { UpdateStudentDTO } from '../Models/update-student-dto';
import { EditableStudentDTO } from '../Models/editable-student-dto';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  dataChanged:Subject<any>=new Subject<any>()

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
  getStudentByID(id?:number):Observable<EditableStudentDTO>{
    return this.http.get<EditableStudentDTO>(`${environment.apiURL}/Student/GetEditableByID?id=${id}`)

  }

  updateStudent(student:AddStudentDTO):Observable<ResultDTO>{
    return this.http.put<ResultDTO>(`${environment.apiURL}/Student/Put`,student)
  }
  dataChange():Observable<any>{
    return this.dataChanged.asObservable()
  }
  updateData(val:boolean){
    this.dataChanged.next(val)
  }
  
}
