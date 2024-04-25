import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  lang?:string;
  constructor(private userService:UserService,private router:Router,
    private translateService:TranslateService
  ){
    
  }
  ngOnInit(): void {
   this.lang=localStorage.getItem('lang')||'en'
  }
logout(){
  const token = sessionStorage.getItem('token')

  this.userService.logout(token).subscribe(res=>{
    sessionStorage.removeItem('token')
    this.userService.isLoggedIn.next(false)
    this.router.navigateByUrl('/login')
    
  })
}
//------
changeLang(event:any) {
  let selectedLang=event?.target.value  
  localStorage.setItem('lang',selectedLang)
  this.translateService.use(selectedLang)
  location.reload()
  }
}
