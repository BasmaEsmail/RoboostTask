import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toaster:ToastrService) { }

  notify(message?:string,result?:boolean){
    if(result==true)
      {        
        this.toaster.success(message,'',{positionClass:'toast-top-right'})
      }
      else
      {
        this.toaster.error(message,'',{positionClass:'toast-top-right'})
      }

  }
}
