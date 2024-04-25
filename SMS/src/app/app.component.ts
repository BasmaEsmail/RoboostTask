import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMS';
  dir:string='';
  constructor(private translateService:TranslateService){
    translateService.setDefaultLang('en')
    translateService.use(localStorage.getItem('lang')||'en')
    if(localStorage.getItem('lang')=='en')
      this.dir='ltr'
    else
    {
      this.dir= 'rtl'
    }

  }
}
