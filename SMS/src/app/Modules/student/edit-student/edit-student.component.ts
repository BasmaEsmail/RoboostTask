import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResultDTO } from 'src/app/Shared/Models/result-dto';
import { StudentDataDTO } from 'src/app/Shared/Models/student-data-dto';
import { UpdateStudentDTO } from 'src/app/Shared/Models/update-student-dto';
import { StudentService } from 'src/app/Shared/Services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  updateStudentForm!: FormGroup;
  studentInfo?: UpdateStudentDTO;
  //----------------
  submitted: boolean = false;
  stdId: string | null = '';

  constructor(private stdService: StudentService, private activeRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.updateStudentForm = new FormGroup({
      nameArabicControl: new FormControl('',Validators.required),
      nameEnglishControl:new FormControl('',Validators.required),
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
        this.studentInfo=res.Data 
        this.patchValues()
      })
    }
  }
  patchValues(){
    this.updateStudentForm.patchValue({
      firstNameControl:this.studentInfo?.FirstName,
      lastNameControl:this.studentInfo?.LastName,
      mobileControl:this.studentInfo?.Mobile,
      emailControl:this.studentInfo?.Email,
      nidControl:this.studentInfo?.NationalID,
      ageControl:this.studentInfo?.Age
    })
  }
  save() {
    this.submitted = true
    if (this.updateStudentForm.invalid) {
      return
    }
    let updatedStudent: UpdateStudentDTO = {
      ID:this.studentInfo?.ID,
      NameArabic:this.updateStudentForm.controls['nameArabicControl'].value,
      NameEnglish:this.updateStudentForm.controls['nameEnglishControl'].value,
      FirstName: this.updateStudentForm.controls['firstNameControl'].value,
      LastName: this.updateStudentForm.controls['lastNameControl'].value,
      NationalID: this.updateStudentForm.controls['nidControl'].value,
      Email: this.updateStudentForm.controls['emailControl'].value,
      Mobile: this.updateStudentForm.controls['mobileControl'].value,
      Age: this.updateStudentForm.controls['ageControl'].value
    }
    this.stdService.updateStudent(updatedStudent).subscribe(res => {
      console.log(res);
      


    })
  }
}
