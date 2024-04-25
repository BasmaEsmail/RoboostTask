import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  langChanged:Subject<any>=new Subject()
  constructor() { }

  langListner():Observable<any>{
    return this.langChanged.asObservable();
  }
  updateLang(){
    this.langChanged.next('')
  }
}
