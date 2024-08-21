import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { MobilBodyComponent } from "../mobil-body/mobil-body.component";

@Component({
  selector: 'app-mobil-card',
  standalone: true,
  imports: [NavComponent, FooterComponent, MobilBodyComponent],
  templateUrl: './mobil-card.component.html',
  styleUrl: './mobil-card.component.scss'
})
export class MobilCardComponent {

}
