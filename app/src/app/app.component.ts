import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobilCardComponent } from "./mobil-card/mobil-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobilCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
