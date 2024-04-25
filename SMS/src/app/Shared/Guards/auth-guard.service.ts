import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private userService: UserService,private router:Router) { }

  canActivate: CanActivateFn = (route, state) => {
    if (this.userService.getLoggedIn())
      {        
        return true
      }
    else
    {
      this.router.navigateByUrl('/login')
      return false

    }
  }
}
