import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserDTO } from 'src/app/Shared/Models/user-dto';
import { LoaderService } from 'src/app/Shared/Services/loader.service';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm!:FormGroup;
  failed:boolean=false;
  resMessage?:string;

  constructor(private userService:UserService, private router:Router,private loader:LoaderService){

  }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userNameControl:new FormControl(),
      passwordControl:new FormControl()
    })  }
  login() {
    let user:UserDTO = {
      UserName:this.loginForm.controls['userNameControl'].value,
      Password:this.loginForm.controls['passwordControl'].value,
    }
    this.loader.setLoading(true)
      this.userService.login(user).subscribe(res => {
        this.loader.setLoading(false)
        if (res.Success) {
          this.failed=false
          
          sessionStorage.setItem('token', res.Data)
          this.router.navigateByUrl('/student')
        }
        else {
          this.failed=true
          this.resMessage=res.Message
        }
  
      }
      )
      
    }

}
