import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/Shared/Models/user-dto';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!:FormGroup;
  resMessage?:string;
  failed:boolean=false;
  constructor(private userService:UserService,private router:Router){

  }
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      nameControl:new FormControl(),
      userNameControl:new FormControl(),
      passwordControl:new FormControl()
    })
  }
  register(){
    let newUser:UserDTO={
      Name:this.registerForm.controls['nameControl'].value,
      UserName:this.registerForm.controls['userNameControl'].value,
      Password:this.registerForm.controls['passwordControl'].value,
    }
    this.userService.register(newUser).subscribe(res=>{
      this.resMessage=res.Message
      if(res.Success==true)
        {
          this.failed=false
          this.router.navigateByUrl('/user/login')
        }
        else
        {
          this.failed=true
        }
      
    })
  }

}
