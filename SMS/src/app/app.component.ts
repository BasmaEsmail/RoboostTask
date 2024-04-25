import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './Shared/Services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SMS';
  dir: string = '';
  constructor(private translateService: TranslateService, private locale: LocaleService) {
    translateService.setDefaultLang('en')
    translateService.use(localStorage.getItem('lang') || 'en')
    locale.langListner().subscribe(res => {
      this.setDirection()
    })


  }

  ngOnInit(): void {
    this.setDirection()
  }

  setDirection() {
    if (localStorage.getItem('lang') == 'en')
      this.dir = 'ltr'
    else {
      this.dir = 'rtl'
    }
  }
}
