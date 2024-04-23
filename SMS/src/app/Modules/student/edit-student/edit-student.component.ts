import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResultDTO } from 'src/app/Shared/Models/result-dto';
import { StudentDataDTO } from 'src/app/Shared/Models/student-data-dto';
import { StudentService } from 'src/app/Shared/Services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  updateStudentForm!: FormGroup;
  studentInfo?: StudentDataDTO;
  //----------------
  submitted: boolean = false;
  stdId: string | null = '';

  constructor(private stdService: StudentService, private activeRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.updateStudentForm = new FormGroup({
      firstNameControl: new FormControl('', Validators.required),
      lastNameControl: new FormControl('', Validators.required),
      mobileControl: new FormControl(''),
      emailControl: new FormControl('', Validators.email),
      nidControl: new FormControl(''),
      ageControl: new FormControl('')
    })

    this.getStudentByID()

  }

  getStudentByID() {
   this.stdId= this.activeRoute.snapshot.paramMap.get('id');
    
    if (this.stdId != null) {

      this.stdService.getStudentByID(+this.stdId).subscribe(res => {
        console.log(res);
        
      })
    }
  }
  save() {
    this.submitted = true
    if (this.updateStudentForm.invalid) {
      return
    }
    let updatedStudent: any = {
      FirstName: this.updateStudentForm.controls['firstNameControl'].value,
      LastName: this.updateStudentForm.controls['lastNameControl'].value,
      NationalID: this.updateStudentForm.controls['nidControl'].value,
      Email: this.updateStudentForm.controls['emailControl'].value,
      Mobile: this.updateStudentForm.controls['mobileControl'].value,
      Age: this.updateStudentForm.controls['ageControl'].value
    }
    this.stdService.createStudent(updatedStudent).subscribe(res => {



    })
  }
}
