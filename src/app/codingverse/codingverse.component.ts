import { Component } from '@angular/core';
import { StudioComponent } from '../studio/studio.component';

@Component({
  selector: 'app-codingverse',
  standalone: true,
  imports: [StudioComponent],
  templateUrl: './codingverse.component.html',
  styleUrl: './codingverse.component.css'
})
export class CodingverseComponent {

  dadystore(){

    window.location.href = "https://dadystores.com/#/home/fashion";

  }



  ezyearn(){
    window.location.href = "https://ezyearning.com/";

  }


  cashgrow(){
    window.location.href = "https://thecashgrow.com/#/home";

  }

  servicecir(){
    window.location.href = "https://servicecircle.au/#/search";

  }
}
