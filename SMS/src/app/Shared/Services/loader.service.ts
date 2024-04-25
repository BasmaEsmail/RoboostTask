import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading:boolean=false;
  constructor() { }
  setLoading(isLoading:boolean){
    this.isLoading=isLoading
  }
  getLoading(){
    return this.isLoading
  }
}
