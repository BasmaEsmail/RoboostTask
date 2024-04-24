import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserDTO } from 'src/app/Shared/Models/user-dto';
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
  public isLoggedIn:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);

  constructor(private userService:UserService,private router:Router){

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
      this.userService.login(user).subscribe(res=>
        {          
          this.isLoggedIn.next(res.Success)
          
          if(res.Success)
            {
              
              this.router.navigateByUrl('/student')
              this.failed=false
            } 
            else 
            {
              this.resMessage=res.Message;
              this.failed=true
            }
        }
      )
    }

}
