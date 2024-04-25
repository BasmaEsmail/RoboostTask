import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private userService:UserService,private router:Router){
    
  }
logout(){
  const token = sessionStorage.getItem('token')

  this.userService.logout(token).subscribe(res=>{
    sessionStorage.removeItem('token')
    this.userService.isLoggedIn.next(false)
    this.router.navigateByUrl('/login')
    
  })
}
}
