import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentDTO } from 'src/app/Shared/Models/add-student-dto';
import { StudentService } from 'src/app/Shared/Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  submitted:boolean=false;
  addStudentForm!:FormGroup;
  constructor(private activateModal: NgbActiveModal,
    private studentService:StudentService,
  ) {

  }
  ngOnInit(): void {
    this.addStudentForm=new FormGroup({
      firstNameControl:new FormControl('',Validators.required),
      lastNameControl:new FormControl('',Validators.required),
      mobileControl:new FormControl(''),
      emailControl:new FormControl('',Validators.email),
      nidControl:new FormControl(''),
      ageControl:new FormControl('')
    })
  }
  save(){
    this.submitted=true
    if(this.addStudentForm.invalid)
      {
        return
        
      }
    let newStudent:AddStudentDTO={
      FirstName:this.addStudentForm.controls['firstNameControl'].value,
      LastName:this.addStudentForm.controls['lastNameControl'].value,
      NationalID:this.addStudentForm.controls['nidControl'].value,
      Email:this.addStudentForm.controls['emailControl'].value,
      Mobile:this.addStudentForm.controls['mobileControl'].value,
      Age:this.addStudentForm.controls['ageControl'].value
    }
    this.studentService.createStudent(newStudent).subscribe(res=>{
      this.activateModal.close()
      location.reload()

      
    })
  }
  closePopup() {
    this.activateModal.close()
  }
}
