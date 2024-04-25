import { Component } from '@angular/core';
import { LoaderService } from 'src/app/Shared/Services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(public loader:LoaderService){}

}
