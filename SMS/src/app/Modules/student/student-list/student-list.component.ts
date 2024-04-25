import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentDataDTO } from 'src/app/Shared/Models/student-data-dto';
import { StudentService } from 'src/app/Shared/Services/student.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  studentData:StudentDataDTO[]=[];
  filteredStudentData:StudentDataDTO[]=[];

  //--------------
  selectedStudent?:StudentDataDTO;

  @ViewChild('confirmModal') confirmModal!:ElementRef ;
  constructor(private studentService:StudentService,
    private ngbService:NgbModal,
    private router:Router
  ){

  }
  ngOnInit(): void {
    this.getStudentList()
  }
  getStudentList(){
    this.studentService.getStudentList().subscribe(res=>{
      this.studentData=res.Data;
      this.filteredStudentData=res.Data;
    })
  }
  openAddForm(){
    this.ngbService.open(AddStudentComponent, { windowClass: 'Modal-big', ariaLabelledBy: 'modal-basic-title',backdrop:'static', size: 'lg'  })
  }
  openConfirmModal(std:StudentDataDTO) {
    this.selectedStudent=std;
    this.ngbService.open(this.confirmModal)
    }
  deleteStudent() {
    this.studentService.deleteStudent(this.selectedStudent?.ID).subscribe(res=>{
      this.ngbService.dismissAll()
      this.getStudentList()
      
    })
    }
    editStudent(id:number) {
    this.router.navigate([`student/edit/${id}`])
    }

    search(event:any){
      this.filteredStudentData= this.studentData.filter(s=>s.Name.includes(event.target.value) || s.Age.toString().includes(event.target.value)
      || s.Mobile.includes(event.target.value) || s.NationalID.includes(event.target.value)
     )
    }
}
