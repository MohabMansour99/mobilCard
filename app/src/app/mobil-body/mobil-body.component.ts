import { Component } from '@angular/core';

@Component({
  selector: 'app-mobil-body',
  standalone: true,
  imports: [],
  templateUrl: './mobil-body.component.html',
  styleUrl: './mobil-body.component.scss'
})
export class MobilBodyComponent {
  Name:string = 'Dear'

  // <-------------- function to click on done link ----------------------->
  doneBtn(){
    console.log("sucessfully done");
    prompt('sucessfully done')
  }
}
